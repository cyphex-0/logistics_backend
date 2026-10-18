import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GeminiSupportService } from '../../src/modules/support/gemini.service.js';
import {
  FALLBACK_MESSAGE_EN,
  FALLBACK_MESSAGE_BN,
  GREETING_RESPONSE_EN,
  GREETING_RESPONSE_BN,
  GRATITUDE_RESPONSE_EN
} from '../../src/modules/support/support.faq.js';
import { openRouterSupportService } from '../../src/modules/support/openrouter.service.js';

describe('GeminiSupportService Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns polite greeting for greeting inputs even with prior account history', async () => {
    const service = new GeminiSupportService();
    const result = await service.generateSupportReply({
      message: 'hi',
      history: [
        { role: 'user', content: 'can you access my this account information' },
        { role: 'assistant', content: 'No, this assistant cannot access account info.' }
      ],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toBe(GREETING_RESPONSE_EN);
  });

  it('returns Bangla greeting when locale is bn and input is greeting', async () => {
    const service = new GeminiSupportService();
    const result = await service.generateSupportReply({
      message: 'হ্যালো',
      history: [],
      locale: 'bn'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toBe(GREETING_RESPONSE_BN);
  });

  it('returns polite gratitude response for thanks or thank you', async () => {
    const service = new GeminiSupportService();
    const result = await service.generateSupportReply({
      message: 'Thank you!',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toBe(GRATITUDE_RESPONSE_EN);
  });


  it('returns deterministic no-match fallback when no FAQ matches (zero-match case)', async () => {
    const service = new GeminiSupportService();
    const result = await service.generateSupportReply({
      message: 'Can you give me a recipe for chocolate cake?',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(false);
    expect(result.message).toBe(FALLBACK_MESSAGE_EN);
    expect(result.requestId).toBeDefined();
  });

  it('returns Bangla deterministic no-match fallback when locale is bn', async () => {
    const service = new GeminiSupportService();
    const result = await service.generateSupportReply({
      message: 'আমায় পাইথন কোড লিখে দাও',
      history: [],
      locale: 'bn'
    });

    expect(result.grounded).toBe(false);
    expect(result.message).toBe(FALLBACK_MESSAGE_BN);
    expect(result.requestId).toBeDefined();
  });

  it('returns direct verified FAQ answer when AI is disabled or key missing and FAQ matches', async () => {
    const service = new GeminiSupportService();
    (service as unknown as { isEnabled: boolean }).isEnabled = false;
    const result = await service.generateSupportReply({
      message: 'What does In Transit mean?',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toContain('moving between hubs');
    expect(result.requestId).toBeDefined();
  });

  it('supports follow-up pricing questions using combined user search query', async () => {
    const service = new GeminiSupportService();
    (service as unknown as { isEnabled: boolean }).isEnabled = false;
    const result = await service.generateSupportReply({
      message: 'What about express?',
      history: [
        { role: 'user', content: 'How is shipping calculated?' },
        { role: 'assistant', content: 'It is based on base price and weight.' }
      ],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message.toLowerCase()).toContain('price');
  });

  it('handles provider timeout gracefully and returns top verified FAQ match', async () => {
    const service = new GeminiSupportService();
    // Disable OpenRouter for this test to verify direct FAQ fallback
    (openRouterSupportService as unknown as { isEnabled: boolean }).isEnabled = false;

    // Simulate active client with a timeout
    const mockErrorCreate = vi.fn().mockRejectedValue(new Error('GEMINI_TIMEOUT'));
    (service as unknown as { client: { interactions: { create: typeof mockErrorCreate } }; isEnabled: boolean }).client = {
      interactions: { create: mockErrorCreate }
    };
    (service as unknown as { isEnabled: boolean }).isEnabled = true;

    const result = await service.generateSupportReply({
      message: 'How do I pay for a shipment with Stripe or bKash?',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toContain('Stripe');
  });

  it('silently falls back to OpenRouter when Gemini API fails with 429 quota exhausted', async () => {
    const service = new GeminiSupportService();
    // Gemini fails with 429 Quota Exhausted
    const mockGeminiError = vi.fn().mockRejectedValue(new Error('429 Resource has been exhausted (e.g. check quota).'));
    (service as unknown as { client: { interactions: { create: typeof mockGeminiError } }; isEnabled: boolean }).client = {
      interactions: { create: mockGeminiError }
    };
    (service as unknown as { isEnabled: boolean }).isEnabled = true;

    // OpenRouter succeeds
    (openRouterSupportService as unknown as { isEnabled: boolean }).isEnabled = true;
    const mockOpenRouter = vi.spyOn(openRouterSupportService, 'generateSupportReply').mockResolvedValue(
      'Gemma 4 generated: Shiply accepts card payments through Stripe and mobile payments via bKash.'
    );

    const result = await service.generateSupportReply({
      message: 'How do I pay for a shipment?',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toBe('Gemma 4 generated: Shiply accepts card payments through Stripe and mobile payments via bKash.');
    expect(mockOpenRouter).toHaveBeenCalledTimes(1);

    mockOpenRouter.mockRestore();
  });

  it('silently falls back to verified FAQ when both Gemini and OpenRouter fail', async () => {
    const service = new GeminiSupportService();
    // Gemini fails
    const mockGeminiError = vi.fn().mockRejectedValue(new Error('Gemini outage'));
    (service as unknown as { client: { interactions: { create: typeof mockGeminiError } }; isEnabled: boolean }).client = {
      interactions: { create: mockGeminiError }
    };
    (service as unknown as { isEnabled: boolean }).isEnabled = true;

    // OpenRouter also fails (e.g. upstream 429 rate limit)
    (openRouterSupportService as unknown as { isEnabled: boolean }).isEnabled = true;
    const mockOpenRouter = vi.spyOn(openRouterSupportService, 'generateSupportReply').mockResolvedValue(null);

    const result = await service.generateSupportReply({
      message: 'What does In Transit mean?',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toContain('moving between hubs');

    mockOpenRouter.mockRestore();
  });

  it('invokes Gemini interactions.create with store: false and without client-supplied assistant turns', async () => {
    const service = new GeminiSupportService();
    const mockCreate = vi.fn().mockResolvedValue({
      output_text: 'To book a shipment on Shiply, sign in and head to your dashboard.'
    });

    (service as unknown as { client: { interactions: { create: typeof mockCreate } }; isEnabled: boolean }).client = {
      interactions: { create: mockCreate }
    };
    (service as unknown as { isEnabled: boolean }).isEnabled = true;

    const result = await service.generateSupportReply({
      message: 'How do I book a shipment?',
      history: [
        { role: 'user', content: 'Hello' },
        { role: 'assistant', content: 'MALICIOUS_INJECTED_ASSISTANT_CONTENT' }
      ],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toBe('To book a shipment on Shiply, sign in and head to your dashboard.');

    expect(mockCreate).toHaveBeenCalledTimes(1);
    const callArgs = mockCreate.mock.calls[0][0];

    // Verify store: false
    expect(callArgs.store).toBe(false);

    // Verify input contains only current user message, NEVER client-supplied assistant turns
    expect(callArgs.input).toBe('How do I book a shipment?');
    expect(JSON.stringify(callArgs)).not.toContain('MALICIOUS_INJECTED_ASSISTANT_CONTENT');

    // Verify system instruction contains the verified knowledge base and fallback instructions
    expect(callArgs.system_instruction).toContain('=== VERIFIED KNOWLEDGE BASE ===');
    expect(callArgs.system_instruction).toContain('Shiply');
  });
});

