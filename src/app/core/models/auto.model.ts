export interface Auto {
    id: string;
    nombre: string;
    modelo: string;
    año: number;
    descripcion: string;
    imagen: string;
}

export interface AutoModel{
    autoId: string;
    nombre: string;
    numeroMotor: string;
    fechaEsamble: string;
    precioMercado: number;
    marcaId: string;
}