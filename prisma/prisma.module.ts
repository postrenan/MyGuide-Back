import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // Torna o PrismaModule global, para que ele seja acessível em toda a aplicação sem precisar ser importado em cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService],  // Exporta o PrismaService para que outros módulos possam utilizá-lo
})
export class PrismaModule {}
