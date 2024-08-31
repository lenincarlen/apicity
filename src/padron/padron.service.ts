import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Padron } from './entities/padron.entity';
import { CreatePadronDto } from './dto/create-padron.dto';  
 
@Injectable()
export class PadronService {
  constructor(
    @InjectRepository(Padron)
    private readonly padronRepository: Repository<Padron>,
  ) {}

  // Asegúrate de que estamos usando el tipo correcto del DTO
  async create(createPadronDto: CreatePadronDto): Promise<Padron> {
    if (!createPadronDto.Cedula) {
      throw new Error('La cédula no puede estar vacía');
    }
    const padron = this.padronRepository.create(createPadronDto);
    try {
      return await this.padronRepository.save(padron);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error('Ya existe un padrón con esta cédula');
      }
      throw error;
    }
  }

  async findAll(): Promise<Padron[]> {
    return await this.padronRepository.find();
  }

  async findOne(id: string): Promise<Padron> {
    return await this.padronRepository.findOneBy({ Cedula: id });
  }

  async remove(id: string): Promise<void> {
    await this.padronRepository.delete(id);
  }
}
