import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircunscripcionController } from './circunscripcion.controller';
import { CircunscripcionService } from './circunscripcion.service';
import { Circunscripcion } from './entities/circunscripcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Circunscripcion])],
  controllers: [CircunscripcionController],
  providers: [CircunscripcionService],
})
export class CircunscripcionModule {}