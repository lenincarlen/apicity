import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Colegio {
  @PrimaryGeneratedColumn()
  IDColegio: number;

  @Column()
  CodigoColegio: string;

  @Column()
  IDMunicipio: number;

  @Column()
  Descripcion: string;

  @Column()
  IDRecinto: number;

  @Column()
  TieneCupo: boolean;

  @Column()
  CantidadInscritos: number;

  @Column()
  CantidadReservada: number;

  @Column()
  RegID: number;
}