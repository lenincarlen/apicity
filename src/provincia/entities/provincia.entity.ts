import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Provincia {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Descripcion: string;

  @Column()
  IDMunicipioCabecera: number;

  @Column()
  Oficio: string;

  @Column()
  Estatus: string;

  @Column()
  ZONA: string;

  @Column()
  RegID: number;

  @Column()
  Region: number;
}