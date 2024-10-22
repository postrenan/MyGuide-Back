import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],  // Certifique-se de que o PrismaModule está importado aqui
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
