import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarea {
  _id?: string;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: string;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:3000/api/tareas';

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }
  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  eliminarTarea(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}