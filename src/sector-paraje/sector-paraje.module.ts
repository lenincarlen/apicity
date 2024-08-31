import { Module } from '@nestjs/common';
import { SectorParajeService } from './sector-paraje.service';
import { SectorParajeController } from './sector-paraje.controller';

@Module({
  controllers: [SectorParajeController],
  providers: [SectorParajeService],
})
export class SectorParajeModule {}
