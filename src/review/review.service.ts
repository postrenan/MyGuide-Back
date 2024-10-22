import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async getAllReviews() {
    return this.prisma.review.findMany({ include: { user: true, shop: true } });
  }

  async getReviewById(id: number) {
    return this.prisma.review.findUnique({ where: { id }, include: { user: true, shop: true } });
  }

  async createReview(data: any) {
    return this.prisma.review.create({ data });
  }

  async updateReview(id: number, data: any) {
    return this.prisma.review.update({ where: { id }, data });
  }

  async deleteReview(id: number) {
    return this.prisma.review.delete({ where: { id } });
  }
}
