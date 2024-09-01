import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColegioService } from './colegio.service';
 

@Controller('/api/v1/colegio')
export class ColegioController {
  constructor(private readonly colegioService: ColegioService) {}
 

  @Get()
  findAll() {
    return this.colegioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colegioService.findOne(+id);
  }
 
   
}
