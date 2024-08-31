import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Padron {
  @PrimaryColumn()
  Cedula: string;

  @Column()
  Nombres: string;

  @Column()
  Apellido1: string;

  @Column()
  Apellido2: string;

  @Column()
  FechaNacimiento: Date;

  @Column()
  LugarNacimiento: string;

  @Column()
  IDCategoria: number;

  @Column()
  IdSexo: number;

  @Column()
  IdEstadoCivil: number;

  @Column()
  IdOcupacion: number;

  @Column()
  IdNacionalidad: number;

  @Column()
  IdProvincia: number;

  @Column({ nullable: true })  // Permitir null si es necesario
  IDMunicipioResidencia: number;

  @Column()
  IDSectorParaje: number;

  @Column()
  IDMunicipioColegio: number;

  @Column()
  IDColegio: number;

  @Column()
  IDCausaCancelacion: number;

  @Column()
  IDEstatus: number;

  @Column({ default: false })
  EstatusCedulaAzul: boolean;

  @Column({ nullable: true })
  CedulaAnterior: string;

  @Column()
  mun_ced: number;

  @Column()
  seq_ced: number;

  @Column()
  ver_ced: number;
}


