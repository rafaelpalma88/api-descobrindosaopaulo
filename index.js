const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())
const port = process.env.PORT || 3000

const events = [
  {
    id: '752aeea9-0859-4128-ac49-14eda92b0276',
    active: true,
    image: '',
    title: 'Esfiha Imigrantes',
    address:
      'Av. Dr. Ricardo Jafet, 3332 - Vila Gumercindo, São Paulo - SP, 04260-020',
    description: [
      'Eleita entre as melhores esfihas de São Paulo e com pontuação máxima na pesquisa "Você é o crítico", do Guia da Folha, em que consumidores avaliaram comida, ambiente, serviços e atendimento, a Esfiha Imigrantes, uma casa simples, consolidou-se como referência em comida árabe na cidade',
      'Chegou a hora de conhecer mais este local com a melhor companhia! Junte-se conosco nesta noite de sábado!',
    ],
    startDate: '2023-04-29T22:00:00.000Z',
    endDate: '2023-04-30T00:00:00.000Z',
    latitude: '-23.6038406',
    longitude: '-46.6275783'
  },
  {
    id: '9fefe65e-b4ac-4ec7-8b19-1f17069f84f1',
    active: false,
    image: '',
    title: 'Hopi Hari',
    address:
      'Av. Dr. Ricardo Jafet, 3332 - Vila Gumercindo, São Paulo - SP, 04260-020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget sapien sed lectus imperdiet vehicula quis vitae risus. Donec at dui pretium, vehicula quam nec, tristique leo. Nam egestas tellus orci, non commodo urna imperdiet nec. Sed at libero massa',
    startDate: '2023-04-29T22:00:00.000Z',
    endDate: '2023-04-30T00:00:00.000Z',
    latitude: '-23.6038406',
    longitude: '-46.6275783'
  },
]

server.get('/events', (req, res) => {
  return res.json(events)
})

server.listen(port)