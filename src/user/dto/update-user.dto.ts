import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'user@example.com', description: 'Email do usuário' })
  email?: string;

  @ApiPropertyOptional({ example: 'password123', description: 'Senha do usuário' })
  password?: string;

  @ApiPropertyOptional({ example: 'John Doe', description: 'Nome completo do usuário' })
  name?: string;

  @ApiPropertyOptional({ example: 'johndoe', description: 'Nome de usuário' })
  username?: string;

  @ApiPropertyOptional({ example: '1990-01-01', description: 'Data de nascimento do usuário' })
  birthday?: string;
}
