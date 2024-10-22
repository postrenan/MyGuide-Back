import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLocationDto) {
    return this.prisma.location.create({
      data: {
        ...data,  // Isso mapeia o DTO para os campos esperados pelo Prisma
      },
    });
  }

  async findAll() {
    return this.prisma.location.findMany({
      include: { shops: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.location.findUnique({
      where: { id },
      include: { shops: true },
    });
  }

  async update(id: number, data: Prisma.LocationUpdateInput) {
    return this.prisma.location.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.location.delete({
      where: { id },
    });
  }
}
