import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CiudadSeccion {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  IDMunicipio: number;

  @Column()
  IDDistritoMunicipal: number;

  @Column()
  CodigoCiudad: string;

  @Column()
  Descripcion: string;

  @Column()
  Oficio: string;

  @Column()
  Estatus: string;

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