import { Injectable } from '@nestjs/common';
import { CreateSectorParajeDto } from './dto/create-sector-paraje.dto';
import { UpdateSectorParajeDto } from './dto/update-sector-paraje.dto';

@Injectable()
export class SectorParajeService {
  create(createSectorParajeDto: CreateSectorParajeDto) {
    return 'This action adds a new sectorParaje';
  }

  findAll() {
    return `This action returns all sectorParaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sectorParaje`;
  }

  update(id: number, updateSectorParajeDto: UpdateSectorParajeDto) {
    return `This action updates a #${id} sectorParaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} sectorParaje`;
  }
}
