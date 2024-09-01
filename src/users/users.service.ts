import { Injectable } from '@nestjs/common';
 
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private usersRepository:Repository<User>
  ){

  }
  

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await `This action returns a #${id} user`;
  }

 
}
