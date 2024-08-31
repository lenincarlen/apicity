import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PadronService } from './padron.service';
import { CreatePadronDto } from './dto/create-padron.dto';

@Controller('/api/v1/padron')
export class PadronController {
  constructor(private readonly padronService: PadronService) {}

  @Post()
  create(@Body() createPadronDto: CreatePadronDto) {
    return this.padronService.create(createPadronDto);
  }

  @Get()
  findAll() {
    return this.padronService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.padronService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.padronService.remove(id);
  }
}
