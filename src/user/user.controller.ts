import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() data: any) {
    await this.userService.createUser(data);
    return console.log(data);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() data: any) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
