import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SectorParaje {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  IDCiudadSeccion: number;

  @Column()
  CodigoSector: string;

  @Column()
  Descripcion: string;

  @Column()
  Oficio: string;

  @Column()
  Estatus: string;

  @Column()
  RegID: number;
}