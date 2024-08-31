import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateColegioDto {
  @IsString()
  CodigoColegio: string;

  @IsNumber()
  IDMunicipio: number;

  @IsString()
  Descripcion: string;

  @IsNumber()
  IDRecinto: number;

  @IsBoolean()
  TieneCupo: boolean;

  @IsNumber()
  CantidadInscritos: number;

  @IsNumber()
  CantidadReservada: number;

  @IsNumber()
  RegID: number;
}