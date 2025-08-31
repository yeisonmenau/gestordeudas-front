import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRequest, UsuarioResponse } from '../models/usuario.model';
import { DeudaRequest, DeudaResponse } from '../models/deuda.model';

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

    crearDeuda(DeudaRequest: DeudaRequest): Observable<DeudaResponse> {
        return this.http.post<DeudaResponse>(`${this.apiUrl}/deuda`, DeudaRequest);
    }
    mostrarDeudas(): Observable<DeudaResponse[]> {
        return this.http.get<DeudaResponse[]>(`${this.apiUrl}/deuda`);
    }
    actualizarDeuda(idDeuda: number, deuda: DeudaRequest): Observable<DeudaResponse> {
        return this.http.put<DeudaResponse>(`${this.apiUrl}/deuda/${idDeuda}`, deuda);
    }
    eliminarDeuda(idDeuda: number): Observable<string> {
        return this.http.delete<string>(`${this.apiUrl}/deuda/${idDeuda}`);
    }
    saldarDeuda(idDeuda: number): Observable<string> {
        return this.http.put<string>(`${this.apiUrl}/deuda/saldar/${idDeuda}`, {});
    }
    mostrarDeudaPorPersona(idPersona: number): Observable<DeudaResponse[]> {
        return this.http.get<DeudaResponse[]>(`${this.apiUrl}/deuda/persona/${idPersona}`);
    }
    totalDeudaPorPersona(idPersona: number): Observable<String> {
        return this.http.get<String>(`${this.apiUrl}/deuda/total/${idPersona}`);
    }

    mostrarDeudasPorEstadoYPersona(estado: boolean, idPersona: number): Observable<DeudaResponse[]> {
        return this.http.get<DeudaResponse[]>(`${this.apiUrl}/deuda/persona/${idPersona}/estado/${estado}`);
    }    
    

}
