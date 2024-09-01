import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Descripcion: string;

  @Column()
  IDProvincia: number;

  @Column({ nullable: true })
  IDMunicipioPadre: number;

  @Column()
  Oficio: string;

  @Column()
  Estatus: string;

  @Column()
  DM: string;

  @Column()
  IDUsuarioCreacion: number;

  @Column()
  FechaCreacion: Date;

  @Column()
  IDUsuarioModificacion: number;

  @Column()
  FechaModificacion: Date;

  @Column()
  RegID: number;
}