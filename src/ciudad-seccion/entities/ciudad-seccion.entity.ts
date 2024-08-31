import { IsString, IsNumber, IsDate } from 'class-validator';

export class CiudadSeccionDto {
  @IsNumber()
  IDMunicipio: number;

  @IsNumber()
  IDDistritoMunicipal: number;

  @IsString()
  CodigoCiudad: string;

  @IsString()
  Descripcion: string;

  @IsString()
  Oficio: string;

  @IsString()
  Estatus: string;

  @IsNumber()
  IDUsuarioCreacion: number;

  @IsDate()
  FechaCreacion: Date;

  @IsNumber()
  IDUsuarioModificacion: number;

  @IsDate()
  FechaModificacion: Date;

  @IsNumber()
  RegID: number;
}