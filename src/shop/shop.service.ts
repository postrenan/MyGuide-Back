import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma: PrismaService) {}

  async getAllShops() {
    return this.prisma.shop.findMany({ include: { location: true, category: true } });
  }

  async getShopByName(name: string) {
    return this.prisma.shop.findUnique({ where: { name }, include: { location: true, category: true } });
  }

  async getShopById(id: number) {
    return this.prisma.shop.findUnique({ where: { id }, include: { location: true, category: true } });
  }


  async createShop(data: any) {
    try {
  
      return this.prisma.$transaction(async (prisma) => {
        const location = await prisma.location.create({
          data: {
            street: data.street,
            number: data.number,
            city: data.city,
            state: data.state,
            country: data.country,
            complement: data.complement,
          },
        });
  
        return prisma.shop.create({
          data: {
            email: data.email,
            name: data.name,
            description: data.description,
            price: data.price,
            products: data.products,
            openTime: new Date(data.openTime),
            closeTime: new Date(data.closeTime),
            password: data.password,
            location: {
              connect: { id: location.id },
            },
            category: {
              connect: { id: data.categoryId },
            },
          },
        });
      });
    } catch (error) {
      console.error('Error creating shop:', error);
      throw new Error('Failed to create shop');
    }
  }

  async updateShop(id: number, data: any) {
    return this.prisma.shop.update({ where: { id }, data });
  }

  async deleteShop(id: number) {
    return this.prisma.shop.delete({ where: { id } });
  }
}
