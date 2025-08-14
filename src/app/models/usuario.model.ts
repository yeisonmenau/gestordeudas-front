export interface UsuarioRequest {
    personaCedula: string,
    personaNombre: string,
    personaFechaNacimiento: Date
}

export interface UsuarioResponse {
    personaId: number,
    personaCedula: string,
    personaNombre: string,
    personaEdad: number
}
