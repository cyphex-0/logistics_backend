import { env } from '../../config/env.js';
import { logger } from '../../shared/utils/logger.js';

export interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class OpenRouterSupportService {
  private readonly apiKey?: string;
  private readonly modelName: string;
  private readonly baseUrl: string;
  public readonly isEnabled: boolean;

  constructor() {
    this.apiKey = env.OPENROUTER_API_KEY;
    this.modelName = env.OPENROUTER_MODEL || 'google/gemma-4-31b-it:free';
    this.baseUrl = env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1';
    this.isEnabled = Boolean(this.apiKey && env.AI_SUPPORT_ENABLED);
  }

  /**
   * Calls OpenRouter OpenAI-compatible chat completion endpoint.
   * Returns generated text on success, or null on error / rate limit / timeout.
   */
  async generateSupportReply(
    message: string,
    systemInstruction: string,
    timeoutMs = 15000
  ): Promise<string | null> {
    if (!this.isEnabled || !this.apiKey) {
      return null;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
          'HTTP-Referer': 'https://shiply.com',
          'X-Title': 'Shiply Logistics Platform'
        },
        body: JSON.stringify({
          model: this.modelName,
          messages: [
            { role: 'system', content: systemInstruction },
            { role: 'user', content: message }
          ],
          temperature: 0.2,
          max_tokens: 500
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        const errorBody = await response.text().catch(() => '');
        logger.warn('OpenRouter API returned non-OK status', {
          status: response.status,
          statusText: response.statusText,
          model: this.modelName,
          error: errorBody.slice(0, 300)
        });
        return null;
      }

      const data = (await response.json()) as {
        choices?: Array<{
          message?: {
            content?: string;
          };
        }>;
      };

      const reply = data.choices?.[0]?.message?.content?.trim();
      return reply || null;
    } catch (err: unknown) {
      const isAbort =
        err instanceof Error &&
        (err.name === 'AbortError' || err.message.includes('aborted'));
      logger.warn('OpenRouter request failed', {
        error: isAbort ? 'TIMEOUT' : err instanceof Error ? err.message : String(err),
        model: this.modelName
      });
      return null;
    } finally {
      clearTimeout(timer);
    }
  }
}

export const openRouterSupportService = new OpenRouterSupportService();
