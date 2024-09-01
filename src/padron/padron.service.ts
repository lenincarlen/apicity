import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Padron } from './entities/padron.entity';
 
 
@Injectable()
export class PadronService {
  constructor(
    @InjectRepository(Padron)
    private readonly padronRepository: Repository<Padron>,
  ) {}

  // Asegúrate de que estamos usando el tipo correcto del DTO
 
 

  async findAll(): Promise<Padron[]> {
    return await this.padronRepository.find();
  }

  async findOne(id: string): Promise<Padron> {
    return await this.padronRepository.findOneBy({ Cedula: id });
  }

 
}
