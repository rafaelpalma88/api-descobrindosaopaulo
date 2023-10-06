// import { prismaClient } from '../../prisma'

// interface CreateEventRequest {
//   active: boolean
//   image: string
//   title: string
//   address: string
//   description: string
//   startDate: string
//   endDate: string
//   latitude: string
//   longitude: string
// }

// class CreateEventService {
//   // constructor(private eventsRepository: any) {}
//   // Implementar no futuro a inversão de dependência

//   async execute({
//     active,
//     image,
//     title,
//     address,
//     description,
//     startDate,
//     endDate,
//     latitude,
//     longitude,
//   }: CreateEventRequest) {
//     if (title === '') {
//       throw new Error('Empty title')
//     }

//     const eventAlreadyExists = await prismaClient.events.findFirst({
//       where: {
//         title,
//       },
//     })

//     if (eventAlreadyExists) {
//       throw new Error('Event already exists')
//     }

//     const event = await prismaClient.events.create({
//       data: {
//         active,
//         image,
//         title,
//         address,
//         description,
//         startDate,
//         endDate,
//         latitude,
//         longitude,
//       },
//       select: {
//         active: true,
//         image: true,
//         title: true,
//         address: true,
//         description: true,
//         startDate: true,
//         endDate: true,
//         latitude: true,
//         longitude: true,
//       },
//     })
//     return event
//   }
// }

// export { CreateEventService }
