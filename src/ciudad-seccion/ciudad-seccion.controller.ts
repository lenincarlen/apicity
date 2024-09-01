import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadSeccionService } from './ciudad-seccion.service';
 

@Controller('/api/v1/apiciudadseccion')
export class CiudadSeccionController {
  constructor(private readonly ciudadSeccionService: CiudadSeccionService) {}

  

  @Get()
  findAll() {
    return this.ciudadSeccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadSeccionService.findOne(+id);
  }
 
}
