import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadSeccionDto } from './create-ciudad-seccion.dto';

export class UpdateCiudadSeccionDto extends PartialType(CreateCiudadSeccionDto) {}
