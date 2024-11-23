import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // Supondo que você tem o PrismaService configurado
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(data: CreateUserDto) {
    // Verifica se o e-mail já existe
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    
    if (existingUser) {
      throw new Error('E-mail já cadastrado.');
    }
    
    // Se não existe, cria o usuário
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        username: data.username,
        birthday: new Date(data.birthday),
      },
    });
  }
  
  
  async updateUser(id: number, data: any) {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
