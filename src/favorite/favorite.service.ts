import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  async getAllFavorites() {
    return this.prisma.favorite.findMany({ include: { user: true, shop: true } });
  }

  async getFavoriteById(id: number) {
    return this.prisma.favorite.findUnique({ where: { id }, include: { user: true, shop: true } });
  }

  async createFavorite(data: any) {
    return this.prisma.favorite.create({ data });
  }

  async deleteFavorite(id: number) {
    return this.prisma.favorite.delete({ where: { id } });
  }
}
