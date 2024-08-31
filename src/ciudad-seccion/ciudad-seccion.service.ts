import { Injectable } from '@nestjs/common';
import { CreateCiudadSeccionDto } from './dto/create-ciudad-seccion.dto';
import { UpdateCiudadSeccionDto } from './dto/update-ciudad-seccion.dto';

@Injectable()
export class CiudadSeccionService {
  create(createCiudadSeccionDto: CreateCiudadSeccionDto) {
    return 'This action adds a new ciudadSeccion';
  }

  findAll() {
    return `This action returns all ciudadSeccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudadSeccion`;
  }

  update(id: number, updateCiudadSeccionDto: UpdateCiudadSeccionDto) {
    return `This action updates a #${id} ciudadSeccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudadSeccion`;
  }
}
