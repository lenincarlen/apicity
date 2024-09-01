import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colegio } from './entities/colegio.entity';

@Injectable()
export class ColegioService {
  constructor(
    @InjectRepository(Colegio)
    private colegioRepository: Repository<Colegio>,
  ) {}

  async findAll(): Promise<Colegio[]> {
    return await this.colegioRepository.find();
  }

  async findOne(id: number): Promise<Colegio | undefined> {
    return await this.colegioRepository.findOne({ where: { IDColegio: id } });
  }
}