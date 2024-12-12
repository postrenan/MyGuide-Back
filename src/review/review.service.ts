import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async getAllReviews() {
    return this.prisma.review.findMany({ include: { user: true, shop: true } });
  }

  async getReviewById(id: number) {
    return this.prisma.review.findUnique({ where: { id }, include: { user: true, shop: true } });
  }

  async createReview(userId: number, createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        title: createReviewDto.title,
        description: createReviewDto.description,
        picture: createReviewDto.picture,
        user: {
          connect: { id: userId },
        },
        shop: {
          connect: { id: createReviewDto.shopId },
        },
      },
    });
  }

  async getUserReviews(userId: number) {
    return this.prisma.review.findMany({ where: { userId } });
  }

  async createReviewUser(userId: number, createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        ...createReviewDto,
        userId,
      },
    });
  }

  async updateReview(id: number, data: any) {
    return this.prisma.review.update({ where: { id }, data });
  }

  async deleteReview(id: number) {
    return this.prisma.review.delete({ where: { id } });
  }
}
