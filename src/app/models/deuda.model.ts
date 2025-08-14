export interface DeudaRequest {
  personaId: number,
  deudaValor: number,
  deudaFecha: Date,
  deudaFechaMaximaPago: Date
}

export interface DeudaResponse {
    deudaId: number
    nombrePersona: string,
    cedulaPersona: string,
    deudaValor: number,
    deudaFecha: Date,
    deudaFechaMaximaPago: Date,
    pagado: boolean  
}