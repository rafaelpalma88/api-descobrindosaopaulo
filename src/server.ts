import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'
import { env } from './env'
import path from 'path'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message })
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

// const port = process.env.PORT || 3000

app.listen(env.PORT, () => console.log('servidor online !!!'))
