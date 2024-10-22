import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FavoriteService } from './favorite.service';

@Controller('favorites')
export class FavoriteController {
  constructor(private favoriteService: FavoriteService) {}

  @Get()
  async getAllFavorites() {
    return this.favoriteService.getAllFavorites();
  }

  @Get(':id')
  async getFavoriteById(@Param('id') id: number) {
    return this.favoriteService.getFavoriteById(id);
  }

  @Post()
  async createFavorite(@Body() data: any) {
    return this.favoriteService.createFavorite(data);
  }

  @Delete(':id')
  async deleteFavorite(@Param('id') id: number) {
    return this.favoriteService.deleteFavorite(id);
  }
}
