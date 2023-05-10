import {Request, Response} from 'express'
import { ListEventsService } from '../../services/events/ListEventsService';

class ListEventsController {
  async handle(req: Request, res: Response) {

    const listEventsService = new ListEventsService();

    const events = await listEventsService.execute()
  
    return res.json(events)
  }
}

export { ListEventsController }