import { Router, Request, Response } from 'express'
import { ListEventsController } from './controllers/events/ListEventsController'
import { CreateEventController } from './controllers/events/CreateEventController'
import { AuthUserController } from './controllers/users/AuthUserController'
import { CreateUserController } from './controllers/users/CreateUserController'

const router = Router()

// EVENTS
router.get('/events', new ListEventsController().handle)
router.post('/events', new CreateEventController().handle)

// SESSION
router.post('/session', new AuthUserController().handle)

// USERS
router.post('/users', new CreateUserController().handle)

export { router }