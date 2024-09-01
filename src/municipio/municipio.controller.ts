import { Controller, Get,  Param, } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
 

@Controller('/api/v1/municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

 

  @Get()
  findAll() {
    return this.municipioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.municipioService.findOne(+id);
  }
 
   
}
