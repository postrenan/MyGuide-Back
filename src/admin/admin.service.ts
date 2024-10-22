import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getAllAdmins() {
    return this.prisma.admin.findMany({ include: { shop: true } });
  }

  async getAdminById(id: number) {
    return this.prisma.admin.findUnique({ where: { id }, include: { shop: true } });
  }

  async createAdmin(data: any) {
    return this.prisma.admin.create({ data });
  }

  async updateAdmin(id: number, data: any) {
    return this.prisma.admin.update({ where: { id }, data });
  }

  async deleteAdmin(id: number) {
    return this.prisma.admin.delete({ where: { id } });
  }
}
