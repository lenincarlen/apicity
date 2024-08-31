import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Circunscripcion } from './entities/circunscripcion.entity';
import { CreateCircunscripcionDto } from './dto/create-circunscripcion.dto';

@Injectable()
export class CircunscripcionService {
  constructor(
    @InjectRepository(Circunscripcion)
    private circunscripcionRepository: Repository<Circunscripcion>,
  ) {}

  async create(createCircunscripcionDto: CreateCircunscripcionDto): Promise<Circunscripcion> {
    const circunscripcion = this.circunscripcionRepository.create(createCircunscripcionDto);
    return await this.circunscripcionRepository.save(circunscripcion);
  }

  async findAll(): Promise<Circunscripcion[]> {
    return await this.circunscripcionRepository.find();
  }

  async findOne(id: number): Promise<Circunscripcion> {
    return await this.circunscripcionRepository.findOne({ where: { ID: id } });
  }

  async update(id: number, updateCircunscripcionDto: Partial<CreateCircunscripcionDto>): Promise<Circunscripcion> {
    await this.circunscripcionRepository.update(id, updateCircunscripcionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.circunscripcionRepository.delete(id);
  }
}