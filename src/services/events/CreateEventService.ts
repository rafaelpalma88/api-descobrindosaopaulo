import { prismaClient } from "../../prisma";

interface CreateEventRequest {
  active: boolean;
  image: string;
  title: string;
  address: string;
  description: string;
  startDate: string;
  endDate: string;
  latitude: string;
  longitude: string;
}

class CreateEventService {
  async execute({ active, image, title, address, description, startDate, endDate, latitude, longitude }: CreateEventRequest) {

    if (title === '') {
      throw new Error("Empty title")
    }

    const eventAlreadyExists = await prismaClient.events.findFirst({
      where: {
        title: title
      }
    })

    if (eventAlreadyExists) {
      throw new Error("Event already exists")
    }

    const event = await prismaClient.product.create({
      data: {
        active: active, 
        image: image, 
        title: title, 
        address: address, 
        description: description, 
        startDate: startDate, 
        endDate: endDate, 
        latitude: latitude, 
        longitude: longitude
      },
      select: {
        active: true, 
        image: true, 
        title: true, 
        address: true, 
        description: true, 
        startDate: true, 
        endDate: true, 
        latitude: true, 
        longitude: true
      }
    })
    return event
  }
}

export { CreateEventService }



