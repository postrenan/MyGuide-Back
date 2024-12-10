import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma: PrismaService) {}

  async getAllShops() {
    return this.prisma.shop.findMany({ include: { location: true, category: true } });
  }

  async getShopById(id: number) {
    return this.prisma.shop.findUnique({ where: { id }, include: { location: true, category: true } });
  }

  async createShop(data: any) {
    return this.prisma.shop.create({
      data: {
        email: data.email,
        name: data.name,
        country: data.country,
        city: data.city,
        address: `${data.street}, ${data.number}`,
        description: data.description,
        price: data.price,
        products: data.products,
        pics: data.pics,
        openTime: new Date(data.openTime),
        closeTime: new Date(data.closeTime),
        password: data.password,
        location: {
          create: {
            street: data.street,
            number: data.number,
            city: data.city,
            state: data.state,
            country: data.country,
            complement: data.complement,
          },
        },
        category: {
          connect: { id: data.categoryId }, // Assume-se que o ID da categoria já existe
        },
      },
    });
  }
  
  async updateShop(id: number, data: any) {
    return this.prisma.shop.update({ where: { id }, data });
  }

  async deleteShop(id: number) {
    return this.prisma.shop.delete({ where: { id } });
  }
}
