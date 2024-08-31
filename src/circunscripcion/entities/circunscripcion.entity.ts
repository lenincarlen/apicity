import { IsString, IsNumber } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Circunscripcion {
  @PrimaryGeneratedColumn()
  ID: number;
  
  @IsNumber()
  IDProvincia: number;

  @IsString()
  CodigoCircunscripcion: string;

  @IsString()
  Circunscripcion: string;

  @IsNumber()
  RegID: number;
}