import { Router, Request, Response } from 'express'
import { ListEventsController } from './controllers/events/ListEventsController'

const router = Router()


router.get('/events', new ListEventsController().handle)

// router.post('/events', (req: Request, res: Response) => {
//   return res.json(events)
// })

export { router }