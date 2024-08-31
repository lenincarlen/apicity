import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectorParajeService } from './sector-paraje.service';
import { CreateSectorParajeDto } from './dto/create-sector-paraje.dto';
import { UpdateSectorParajeDto } from './dto/update-sector-paraje.dto';

@Controller('/api/v1/sector-paraje')
export class SectorParajeController {
  constructor(private readonly sectorParajeService: SectorParajeService) {}

  @Post()
  create(@Body() createSectorParajeDto: CreateSectorParajeDto) {
    return this.sectorParajeService.create(createSectorParajeDto);
  }

  @Get()
  findAll() {
    return this.sectorParajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorParajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectorParajeDto: UpdateSectorParajeDto) {
    return this.sectorParajeService.update(+id, updateSectorParajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectorParajeService.remove(+id);
  }
}
