import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recinto } from './entities/recinto.entity';
import { CreateRecintoDto } from './dto/create-recinto.dto';

@Injectable()
export class RecintoService {
  constructor(
    @InjectRepository(Recinto)
    private recintoRepository: Repository<Recinto>,
  ) {}

  async create(createRecintoDto: CreateRecintoDto): Promise<Recinto> {
    const recinto = this.recintoRepository.create(createRecintoDto);
    return await this.recintoRepository.save(recinto);
  }

  findAll() {
    return `This action returns all recinto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recinto`;
  }

  // update(id: number, updateRecintoDto: UpdateRecintoDto) {
  //   return `This action updates a #${id} recinto`;
  // }

  remove(id: number) {
    return `This action removes a #${id} recinto`;
  }
}
