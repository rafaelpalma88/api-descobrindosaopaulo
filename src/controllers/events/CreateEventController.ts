import {Request, Response} from 'express'
import { CreateEventService } from '../../services/events/CreateEventService';

class CreateEventController {
  async handle(req: Request, res: Response) {
    const { senha_provisoria, active, image, title, address, description, startDate, endDate, latitude, longitude } = req.body;

    if (senha_provisoria !== 'rafael123@') {
      throw new Error("Senha provisoria invalida")
    }

    const createEventService = new CreateEventService();

    // colocar uma maneira de validar se nao ta vindo nada vazio undefined e se o evento nao esta cadastrado ja ....
   
    const event = await createEventService.execute({
      active, image, title, address, description, startDate, endDate, latitude, longitude
    })
  
    return res.json(event)
  }
}

export { CreateEventController }