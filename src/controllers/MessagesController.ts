import { Request, Response } from 'express';

import { MessagesService } from '../services/MessagesService';

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { admin_id, text, user_id } = request.body;

      const messagesService = new MessagesService();

      const message = await messagesService.create({
        admin_id,
        text,
        user_id,
      });

      return response.status(200).json(message);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const messagesService = new MessagesService();

      const messages = await messagesService.listByUser(id);

      return response.status(200).json(messages);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { MessagesController };
