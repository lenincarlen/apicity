import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recinto {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  CodigoRecinto: string;

  @Column()
  Descripcion: string;

  @Column()
  Direccion: string;

  @Column()
  IDSectorParaje: number;

  @Column()
  IDCircunscripcion: number;

  @Column()
  IDBarrio: number;

  @Column()
  CapacidadRecinto: number;

  @Column()
  Oficio: string;

  @Column()
  Estatus: string;

  @Column()
  DescripcionLarga: string;

  @Column()
  DireccionLarga: string;

  @Column()
  Codigo: string;

  @Column()
  RegID: number;
}