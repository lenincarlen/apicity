import { IsString, IsNumber,IsNotEmpty, IsBoolean } from 'class-validator';
 
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

export class Colegio {

  @PrimaryColumn()
  IDColegio: number;


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