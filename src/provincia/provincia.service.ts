import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
 
import { Provincia } from './entities/provincia.entity';
 

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ) {}

 

  async findAll(): Promise<Provincia[]> {
    return await this.provinciaRepository.find();
  }

  async findOne(id: number): Promise<Provincia | null> {
    return await this.provinciaRepository.findOneBy({ ID: id });
  }

  
}