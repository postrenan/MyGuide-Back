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
    return this.prisma.shop.create({ data });
  }

  async updateShop(id: number, data: any) {
    return this.prisma.shop.update({ where: { id }, data });
  }

  async deleteShop(id: number) {
    return this.prisma.shop.delete({ where: { id } });
  }
}
