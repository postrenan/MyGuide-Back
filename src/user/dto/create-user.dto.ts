export class CreateUserDto {
    email: string;
    password: string;
    name: string;
    username: string;
    birthday: string; // ou Date, dependendo de como você está lidando com a data
  }