import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadSeccionService } from './ciudad-seccion.service';
import { CreateCiudadSeccionDto } from './dto/create-ciudad-seccion.dto';
import { UpdateCiudadSeccionDto } from './dto/update-ciudad-seccion.dto';

@Controller('ciudad-seccion')
export class CiudadSeccionController {
  constructor(private readonly ciudadSeccionService: CiudadSeccionService) {}

  @Post()
  create(@Body() createCiudadSeccionDto: CreateCiudadSeccionDto) {
    return this.ciudadSeccionService.create(createCiudadSeccionDto);
  }

  @Get()
  findAll() {
    return this.ciudadSeccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadSeccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiudadSeccionDto: UpdateCiudadSeccionDto) {
    return this.ciudadSeccionService.update(+id, updateCiudadSeccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadSeccionService.remove(+id);
  }
}
