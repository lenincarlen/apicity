import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecintoController } from './recinto.controller';
import { RecintoService } from './recinto.service';
import { Recinto } from './entities/recinto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recinto])],
  controllers: [RecintoController],
  providers: [RecintoService],
})
export class RecintoModule {}