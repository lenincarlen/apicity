import { IsString, IsNumber } from 'class-validator';

export class CreateSectorParajeDto {
  @IsNumber()
  IDCiudadSeccion: number;

  @IsString()
  CodigoSector: string;

  @IsString()
  Descripcion: string;

  @IsString()
  Oficio: string;

  @IsString()
  Estatus: string;

  @IsNumber()
  RegID: number;
}