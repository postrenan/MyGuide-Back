import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shops')
@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  // Método para obter todas as lojas com paginação
  @Get()
  async getAllShops(
    @Query('page') page: number = 1,         // Página atual (default é 1)
    @Query('pageSize') pageSize: number = 10, // Tamanho da página (default é 10)
  ) {
    return this.shopService.getAllShops(page, pageSize); // Passando os parâmetros para o serviço
  }

  // Buscar loja pelo nome
  @Get('search/:name') // Usando 'name' como parâmetro
  async getShopByName(@Param('name') name: string) {
    return this.shopService.getShopByName(name); // Passando o nome para o serviço
  }

  @Post()
  async createShop(@Body() data: any) {
    return this.shopService.createShop(data);
  }

  @Put(':name')
  async updateShop(@Param('name') name: string, @Body() data: any) {
    return this.shopService.updateShop(name, data);
  }

  @Delete(':name')
  async deleteShop(@Param('name') name: string) {
    return this.shopService.deleteShop(name);
  }
}
