import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Provincia {
  @PrimaryColumn()
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