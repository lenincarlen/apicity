import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  ID: number;

  @IsString()
  Descripcion: string;

  @IsNumber()
  IDProvincia: number;

  @IsOptional()
  @IsNumber()
  IDMunicipioPadre?: number;

  @IsString()
  Oficio: string;

  @IsString()
  Estatus: string;

  @IsString()
  DM: string;

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