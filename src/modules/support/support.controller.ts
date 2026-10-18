import { Request, Response, NextFunction } from 'express';
import { geminiSupportService } from './gemini.service.js';
import { sendSuccess } from '../../shared/utils/response.js';
import { SupportChatInput } from './support.validation.js';

export class SupportController {
  async handleChat(req: Request, res: Response, next: NextFunction) {
    try {
      const input = req.body as SupportChatInput;
      const result = await geminiSupportService.generateSupportReply(input);

      return sendSuccess(res, 200, 'Support response generated successfully', result);
    } catch (err) {
      next(err);
    }
  }
}

export const supportController = new SupportController();
