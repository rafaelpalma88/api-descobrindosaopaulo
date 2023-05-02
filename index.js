const express = require('express')

const server = express()
server.use(express.json())

let cursos = [
  { id: '1', name: 'PHP' },
  { id: '2', name: 'Laravel' }
]

server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

server.listen(3333)