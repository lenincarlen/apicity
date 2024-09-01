import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PadronService } from './padron.service';
 

@Controller('/api/v1/padron')
export class PadronController {
  constructor(private readonly padronService: PadronService) {}

 

  @Get()
  findAll() {
    return this.padronService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.padronService.findOne(id);
  }

 
}
