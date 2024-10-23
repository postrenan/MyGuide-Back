import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shops')
export class ShopController {
  constructor(private shopService: ShopService) {}

  @Get()
  async getAllShops() {
    return this.shopService.getAllShops();
  }

  @Get(':id')
  async getShopById(@Param('id') id: number) {
    return this.shopService.getShopById(id);
  }

  @Post()
  async createShop(@Body() data: any) {
    return this.shopService.createShop(data);
  }

  @Put(':id')
  async updateShop(@Param('id') id: number, @Body() data: any) {
    return this.shopService.updateShop(id, data);
  }

  @Delete(':id')
  async deleteShop(@Param('id') id: number) {
    return this.shopService.deleteShop(id);
  }
}