import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recinto } from './entities/recinto.entity';
 
 
@Injectable()
export class RecintoService {
  constructor(
    @InjectRepository(Recinto)
    private readonly recintoRepository: Repository<Recinto>,
  ) {}

  // Asegúrate de que estamos usando el tipo correcto del DTO
 
 

  async findAll(): Promise<Recinto[]> {
    return await this.recintoRepository.find();
  }

  async findOne(id: number): Promise<Recinto> {
    return await this.recintoRepository.findOneBy({ ID: id });
  }

 
}
