import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './entities/municipio.entity';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private municipioRepository: Repository<Municipio>,
  ) {}
  async create(createMunicipioDto: CreateMunicipioDto) {
    return await this.municipioRepository.find();
  }

  async findAll(): Promise<Municipio[]> {
    return await this.municipioRepository.find(); 
  }

  async findOne(id: number): Promise<Municipio> {
    return await this.municipioRepository.findOne({ where: { ID: id } });
  }
 

  async update(id: number, updateMunicipioDto: UpdateMunicipioDto): Promise<Municipio | null> {
    await this.municipioRepository.update(id, updateMunicipioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.municipioRepository.delete(id);
  }
}
