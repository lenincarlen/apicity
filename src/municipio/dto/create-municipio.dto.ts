export class CreateMunicipioDto {
  Descripcion: string;
  IDProvincia: number;
  IDMunicipioPadre?: number;
  Oficio: string;
  Estatus: string;
  DM: string;
  IDUsuarioCreacion: number;
  FechaCreacion: Date;
  IDUsuarioModificacion: number;
  FechaModificacion: Date;
  RegID: number;
}