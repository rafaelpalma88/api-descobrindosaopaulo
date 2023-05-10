import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(router)
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => console.log('servidor online !!!'))
