import { IsString, IsNumber } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recinto {

    @PrimaryGeneratedColumn()
  ID: number;
  @IsString()
  CodigoRecinto: string;

  @IsString()
  Descripcion: string;

  @IsString()
  Direccion: string;

  @IsNumber()
  IDSectorParaje: number;

  @IsNumber()
  IDCircunscripcion: number;

  @IsNumber()
  IDBarrio: number;

  @IsNumber()
  CapacidadRecinto: number;

  @IsString()
  Oficio: string;

  @IsString()
  Estatus: string;

  @IsString()
  DescripcionLarga: string;

  @IsString()
  DireccionLarga: string;

  @IsString()
  Codigo: string;

  @IsNumber()
  RegID: number;
}