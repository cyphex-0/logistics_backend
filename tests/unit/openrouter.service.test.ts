import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { OpenRouterSupportService } from '../../src/modules/support/openrouter.service.js';

describe('OpenRouterSupportService Unit Tests', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('returns null if service is disabled or apiKey is missing', async () => {
    const service = new OpenRouterSupportService();
    (service as unknown as { isEnabled: boolean; apiKey?: string }).isEnabled = false;
    (service as unknown as { apiKey?: string }).apiKey = undefined;

    const result = await service.generateSupportReply('Hello', 'System prompt');
    expect(result).toBeNull();
  });

  it('sends correct headers, model, and message format to OpenRouter endpoint', async () => {
    const service = new OpenRouterSupportService();
    (service as unknown as { isEnabled: boolean; apiKey: string }).isEnabled = true;
    (service as unknown as { apiKey: string }).apiKey = 'mock-or-key';

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        choices: [
          {
            message: {
              content: 'Parcel shipping inside Dhaka costs 60 BDT for the first kg.'
            }
          }
        ]
      })
    });
    globalThis.fetch = mockFetch;

    const result = await service.generateSupportReply(
      'How much is shipping in Dhaka?',
      'You are Shiply Support'
    );

    expect(result).toBe('Parcel shipping inside Dhaka costs 60 BDT for the first kg.');
    expect(mockFetch).toHaveBeenCalledTimes(1);

    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toContain('/chat/completions');
    expect(options.method).toBe('POST');
    expect(options.headers['Authorization']).toBe('Bearer mock-or-key');
    expect(options.headers['HTTP-Referer']).toBe('https://shiply.com');
    expect(options.headers['X-Title']).toBe('Shiply Logistics Platform');

    const parsedBody = JSON.parse(options.body);
    expect(parsedBody.model).toBeDefined();
    expect(parsedBody.messages).toEqual([
      { role: 'system', content: 'You are Shiply Support' },
      { role: 'user', content: 'How much is shipping in Dhaka?' }
    ]);
  });

  it('handles upstream 429 rate limit gracefully without throwing and returns null', async () => {
    const service = new OpenRouterSupportService();
    (service as unknown as { isEnabled: boolean; apiKey: string }).isEnabled = true;
    (service as unknown as { apiKey: string }).apiKey = 'mock-or-key';

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      statusText: 'Too Many Requests',
      text: async () => JSON.stringify({ error: { message: 'upstream rate-limited' } })
    });

    const result = await service.generateSupportReply('Question', 'Prompt');
    expect(result).toBeNull();
  });

  it('handles network error or abort timeout gracefully and returns null', async () => {
    const service = new OpenRouterSupportService();
    (service as unknown as { isEnabled: boolean; apiKey: string }).isEnabled = true;
    (service as unknown as { apiKey: string }).apiKey = 'mock-or-key';

    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network connection timeout'));

    const result = await service.generateSupportReply('Question', 'Prompt');
    expect(result).toBeNull();
  });
});
