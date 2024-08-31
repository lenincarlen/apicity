import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CircunscripcionService } from './circunscripcion.service';
import { CreateCircunscripcionDto } from './dto/create-circunscripcion.dto';

@Controller('/api/v1/circunscripcion')
export class CircunscripcionController {
  constructor(private readonly circunscripcionService: CircunscripcionService) {}

  @Post()
  create(@Body() createCircunscripcionDto: CreateCircunscripcionDto) {
    return this.circunscripcionService.create(createCircunscripcionDto);
  }

  @Get()
  findAll() {
    return this.circunscripcionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.circunscripcionService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCircunscripcionDto: Partial<CreateCircunscripcionDto>) {
  //   return this.circunscripcionService.update(+id, updateCircunscripcionDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.circunscripcionService.remove(+id);
  }
}