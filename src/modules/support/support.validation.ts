import { z } from 'zod';

export const supportChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z
    .string()
    .trim()
    .min(1, 'Message content cannot be empty')
    .max(1000, 'Turn content cannot exceed 1000 characters')
});

export const supportChatSchema = z.object({
  body: z.object({
    message: z
      .string()
      .trim()
      .min(1, 'Message cannot be empty')
      .max(1000, 'Message cannot exceed 1000 characters'),
    history: z
      .array(supportChatMessageSchema)
      .max(6, 'History cannot exceed 6 turns')
      .optional()
      .default([]),
    locale: z.enum(['en', 'bn']).optional().default('en')
  })
});

export type SupportChatMessage = z.infer<typeof supportChatMessageSchema>;
export type SupportChatInput = z.infer<typeof supportChatSchema>['body'];

export interface SupportChatResponseData {
  message: string;
  requestId: string;
  grounded: boolean;
}
