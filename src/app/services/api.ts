import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRequest, UsuarioResponse } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class Api {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    crearPersona(usuario:UsuarioRequest): Observable<UsuarioResponse> {
        return this.http.post<UsuarioResponse>(`${this.apiUrl}/persona`, usuario);
    }
    mostrarPersonas(): Observable<UsuarioResponse[]> {
        return this.http.get<UsuarioResponse[]>(`${this.apiUrl}/persona`);
    }
    actualizarPersona(idPersona: number, usuario: UsuarioRequest): Observable<UsuarioResponse> {
        return this.http.put<UsuarioResponse>(`${this.apiUrl}/persona/${idPersona}`, usuario);
    }
    eliminarPersona(idPersona: number): Observable<string> {
        return this.http.delete<string>(`${this.apiUrl}/persona/${idPersona}`);
    }

    
    
    

}
