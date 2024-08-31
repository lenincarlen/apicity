import { Module } from '@nestjs/common';
import { CiudadSeccionService } from './ciudad-seccion.service';
import { CiudadSeccionController } from './ciudad-seccion.controller';

@Module({
  controllers: [CiudadSeccionController],
  providers: [CiudadSeccionService],
})
export class CiudadSeccionModule {}
