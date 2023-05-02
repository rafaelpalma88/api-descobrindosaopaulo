const express = require('express')

const server = express()
server.use(express.json())
const port = process.env.PORT || 3000

let cursos = [
  { id: '1', name: 'PHP' },
  { id: '2', name: 'Laravel' }
]

server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

server.listen(port)