import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassEntity } from './classes.entity';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  findAll() {
    return this.classesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.classesService.findOne(id);
  }

  @Post()
  create(@Body() classe: ClassEntity) {
    return this.classesService.create(classe);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() classe: ClassEntity) {
    return this.classesService.update(id, classe);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.classesService.remove(id);
  }
}
