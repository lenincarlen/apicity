import { Injectable } from '@nestjs/common';
 

@Injectable()
export class CiudadSeccionService {
   

  findAll() {
    return `This action returns all ciudadSeccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudadSeccion`;
  }

  
}
