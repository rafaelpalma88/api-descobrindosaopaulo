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
      }
    })

    return event
  }
}

export { CreateEventService }