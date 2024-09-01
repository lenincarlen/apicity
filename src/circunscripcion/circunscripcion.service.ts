import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Circunscripcion } from './entities/circunscripcion.entity';
 

@Injectable()
export class CircunscripcionService {
  constructor(
    @InjectRepository(Circunscripcion)
    private circunscripcionRepository: Repository<Circunscripcion>,
  ) {}

  

  async findAll(): Promise<Circunscripcion[]> {
    return await this.circunscripcionRepository.find();
  }

  async findOne(id: number): Promise<Circunscripcion> {
    return await this.circunscripcionRepository.findOne({ where: { ID: id } });
  }
 
}