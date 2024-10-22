import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PictureService } from './picture.service';

@Controller('pictures')
export class PictureController {
  constructor(private pictureService: PictureService) {}

  @Get()
  async getAllPictures() {
    return this.pictureService.getAllPictures();
  }

  @Get(':id')
  async getPictureById(@Param('id') id: number) {
    return this.pictureService.getPictureById(id);
  }

  @Post()
  async createPicture(@Body() data: any) {
    return this.pictureService.createPicture(data);
  }

  @Delete(':id')
  async deletePicture(@Param('id') id: number) {
    return this.pictureService.deletePicture(id);
  }
}
