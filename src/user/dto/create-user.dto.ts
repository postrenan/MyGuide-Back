import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Senha do usuário' })
  password: string;

  @ApiProperty({ example: 'John Doe', description: 'Nome completo do usuário' })
  name: string;

  @ApiProperty({ example: 'johndoe', description: 'Nome de usuário' })
  username: string;

  @ApiProperty({ example: '1990-01-01', description: 'Data de nascimento do usuário' })
  birthday: string;
}
