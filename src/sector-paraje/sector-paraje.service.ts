import { Injectable } from '@nestjs/common';
 

@Injectable()
export class SectorParajeService {
  

  findAll() {
    return `This action returns all sectorParaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sectorParaje`;
  }
 
}
