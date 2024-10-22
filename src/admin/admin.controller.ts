import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @Get(':id')
  async getAdminById(@Param('id') id: number) {
    return this.adminService.getAdminById(id);
  }

  @Post()
  async createAdmin(@Body() data: any) {
    return this.adminService.createAdmin(data);
  }

  @Put(':id')
  async updateAdmin(@Param('id') id: number, @Body() data: any) {
    return this.adminService.updateAdmin(id, data);
  }

  @Delete(':id')
  async deleteAdmin(@Param('id') id: number) {
    return this.adminService.deleteAdmin(id);
  }
}
