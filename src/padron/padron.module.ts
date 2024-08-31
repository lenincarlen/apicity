import { Module } from '@nestjs/common';
import { PadronService } from './padron.service';
import { PadronController } from './padron.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Padron } from './entities/padron.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Padron])],
  controllers: [PadronController],
  providers: [PadronService],
})
export class PadronModule {}
