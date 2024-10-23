import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PictureService {
  constructor(private prisma: PrismaService) {}

  async getAllPictures() {
    return this.prisma.picture.findMany({ include: { products: true, shops: true } });
  }

  async getPictureById(id: number) {
    return this.prisma.picture.findUnique({ where: { id }, include: { products: true, shops: true } });
  }

  async createPicture(data: any) {
    return this.prisma.picture.create({ data });
  }

  async deletePicture(id: number) {
    return this.prisma.picture.delete({ where: { id } });
  }
}
