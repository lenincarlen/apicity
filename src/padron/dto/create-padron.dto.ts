export class CreatePadronDto {
    Cedula: string;
    Nombres: string;
    Apellido1: string;
    Apellido2: string;
    FechaNacimiento: Date;
    LugarNacimiento: string;
    IDCategoria: number;
    IdSexo: number;
    IdEstadoCivil: number;
    IdOcupacion: number;
    IdNacionalidad: number;
    IdProvincia: number;
    IDMunicipioResidencia: number;  // Aquí está el campo
    IDSectorParaje: number;
    IDMunicipioColegio: number;
    IDColegio: number;
    IDCausaCancelacion: number;
    IDEstatus: number;
    EstatusCedulaAzul: boolean;
    CedulaAnterior: string;
    mun_ced: number;
    seq_ced: number;
    ver_ced: number;
  }
  