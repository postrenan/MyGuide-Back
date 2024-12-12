import { Controller, Get, Post,Put, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  async getAllReviews() {
    return this.reviewService.getAllReviews();
  }

  @Get('user')
  getUserReviews(@Request() req) {
    return this.reviewService.getUserReviews(req.user.id);
  }

  @Get(':id')
  async getReviewById(@Param('id') id: number) {
    return this.reviewService.getReviewById(id);
  }

  @Post()
  createReview(@Request() req, @Body() createReviewDto: CreateReviewDto) {
    const userId = req.user.id; // Certifique-se de que `req.user` contém `id`
    return this.reviewService.createReview(userId, createReviewDto);
  }
  @Post('create')
  createReviewUser(@Body() createReviewDto: CreateReviewDto, @Request() req) {
    return this.reviewService.createReviewUser(req.user.id, createReviewDto);
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
