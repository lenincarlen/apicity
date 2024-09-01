import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CircunscripcionService } from './circunscripcion.service';
 

@Controller('/api/v1/circunscripcion')
export class CircunscripcionController {
  constructor(private readonly circunscripcionService: CircunscripcionService) {}

   

  @Get()
  findAll() {
    return this.circunscripcionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.circunscripcionService.findOne(+id);
  }

  
}