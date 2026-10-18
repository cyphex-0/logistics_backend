import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GeminiSupportService } from '../../src/modules/support/gemini.service.js';
import { FALLBACK_MESSAGE_EN, FALLBACK_MESSAGE_BN } from '../../src/modules/support/support.faq.js';

describe('GeminiSupportService Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
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
    // Simulate active client with a timeout
    const mockCreate = vi.fn().mockImplementation(() => {
      return new Promise((resolve) => setTimeout(resolve, 15000));
    });

    (service as unknown as { client: { interactions: { create: typeof mockCreate } }; isEnabled: boolean }).client = {
      interactions: { create: mockCreate }
    };
    (service as unknown as { isEnabled: boolean }).isEnabled = true;

    // Fast-forward or trigger error
    const mockErrorCreate = vi.fn().mockRejectedValue(new Error('GEMINI_TIMEOUT'));
    (service as unknown as { client: { interactions: { create: typeof mockErrorCreate } } }).client = {
      interactions: { create: mockErrorCreate }
    };

    const result = await service.generateSupportReply({
      message: 'How do I pay for a shipment with Stripe or bKash?',
      history: [],
      locale: 'en'
    });

    expect(result.grounded).toBe(true);
    expect(result.message).toContain('Stripe');
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
