import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat, username } = request.body;

      const settingsService = new SettingsService();

      const settings = await settingsService.create({
        chat,
        username,
      });

      return response.status(201).json(settings);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async findByUsername(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { username } = request.params;

      const settingsService = new SettingsService();

      const settings = await settingsService.findByUsername(username);

      return response.status(200).json(settings);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { username } = request.params;
      const { chat } = request.body;

      const settingsService = new SettingsService();

      const settings = await settingsService.update(username, chat);

      return response.status(200).json(settings);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { SettingsController };
