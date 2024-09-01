import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecintoService } from './recinto.service';


@Controller('/api/v1/recinto')
export class RecintoController {
  constructor(private readonly recintoService: RecintoService) {}

  

  @Get()
  findAll() {
    return this.recintoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recintoService.findOne(+id);
  }

  
}
