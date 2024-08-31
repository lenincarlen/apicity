import { PartialType } from '@nestjs/mapped-types';
import { CreateSectorParajeDto } from './create-sector-paraje.dto';

export class UpdateSectorParajeDto extends PartialType(CreateSectorParajeDto) {}
