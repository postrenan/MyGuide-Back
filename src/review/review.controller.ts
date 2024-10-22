import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  async getAllReviews() {
    return this.reviewService.getAllReviews();
  }

  @Get(':id')
  async getReviewById(@Param('id') id: number) {
    return this.reviewService.getReviewById(id);
  }

  @Post()
  async createReview(@Body() data: any) {
    return this.reviewService.createReview(data);
  }

  @Put(':id')
  async updateReview(@Param('id') id: number, @Body() data: any) {
    return this.reviewService.updateReview(id, data);
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: number) {
    return this.reviewService.deleteReview(id);
  }
}
