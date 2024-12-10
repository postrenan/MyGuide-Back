import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma: PrismaService) {}

  // Método para obter todas as lojas com paginação
  async getAllShops(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    return this.prisma.shop.findMany({
      skip: skip,
      take: pageSize,
      include: { location: true, category: true },
    });
  }

  // Método para buscar loja pelo nome
  async getShopByName(name: string) {
    const shops = await this.prisma.shop.findMany({
      where: { name: name }, // Usando 'name' para encontrar as lojas
      include: { location: true, category: true },
    });

    return shops.length > 0 ? shops[0] : null; // Retorna a primeira loja encontrada
  }

  // Método para atualizar loja com base no nome
  async updateShop(name: string, data: any) {
    const shop = await this.getShopByName(name); // Busca pela loja
    if (!shop) {
      throw new Error('Shop not found');
    }
    return this.prisma.shop.update({
      where: { id: shop.id }, // Usando o 'id' da loja para atualizar
      data,
    });
  }

  // Método para deletar loja com base no nome
  async deleteShop(name: string) {
    const shop = await this.getShopByName(name); // Busca pela loja
    if (!shop) {
      throw new Error('Shop not found');
    }
    return this.prisma.shop.delete({
      where: { id: shop.id }, // Usando o 'id' da loja para deletar
    });
  }

  // Método para criar uma loja
  async createShop(data: any) {
    return this.prisma.shop.create({ data });
  }
}
