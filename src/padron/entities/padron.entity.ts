import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Padron {
  @PrimaryColumn()
  @IsNotEmpty({ message: 'La cédula no puede estar vacía' })
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

  @ManyToOne(() => Provincia)
  @JoinColumn({ name: 'IdProvincia' })
  provincia: Provincia;

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


