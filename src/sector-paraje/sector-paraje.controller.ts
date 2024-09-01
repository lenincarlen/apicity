import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectorParajeService } from './sector-paraje.service';
 

@Controller('/api/v1/sector-paraje')
export class SectorParajeController {
  constructor(private readonly sectorParajeService: SectorParajeService) {}
 

  @Get()
  findAll() {
    return this.sectorParajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorParajeService.findOne(+id);
  }

    
}
