import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Circunscripcion {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  IDProvincia: number;

  @Column()
  CodigoCircunscripcion: string;

  @Column()
  Circunscripcion: string;

  @Column()
  RegID: number;
}