import { Router, Request, Response } from 'express'
import { ListEventsController } from './controllers/events/ListEventsController'
import { CreateEventController } from './controllers/events/CreateEventController'

const router = Router()

router.get('/events', new ListEventsController().handle)
router.post('/events', new CreateEventController().handle)

export { router }