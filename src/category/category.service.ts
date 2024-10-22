import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllCategories() {
    return this.prisma.category.findMany({ include: { shops: true } });
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findUnique({ where: { id }, include: { shops: true } });
  }

  async createCategory(data: any) {
    return this.prisma.category.create({ data });
  }

  async updateCategory(id: number, data: any) {
    return this.prisma.category.update({ where: { id }, data });
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
