import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia } from './entities/provincia.entity';
 

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ) {}

  async create(createProvinciaDto: CreateProvinciaDto): Promise<Provincia> {
    const nuevaProvincia: Partial<Provincia> = {
      ...createProvinciaDto
    };
    return await this.provinciaRepository.save(nuevaProvincia as Provincia);
  }

  async findAll(): Promise<Provincia[]> {
    return await this.provinciaRepository.find();
  }

  async findOne(id: number): Promise<Provincia | null> {
    return await this.provinciaRepository.findOneBy({ ID: id });
  }

  async update(id: number, updateProvinciaDto: UpdateProvinciaDto): Promise<Provincia | null> {
    await this.provinciaRepository.update(id, updateProvinciaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.provinciaRepository.delete(id);
  }
}