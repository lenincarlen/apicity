import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColegioController } from './colegio.controller';
import { ColegioService } from './colegio.service';
import { Colegio } from './entities/colegio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colegio])],
  controllers: [ColegioController],
  providers: [ColegioService],
})
export class ColegioModule {}