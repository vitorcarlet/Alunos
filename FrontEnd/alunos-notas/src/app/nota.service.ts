import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from './models/Nota';


@Injectable({
    providedIn: 'root'
})
export class NotaService {

    private readonly API_URL = 'http://localhost:3000/notas';

    constructor(private http: HttpClient) { }

    findAll(): Observable<Nota[]> {
        return this.http.get<Nota[]>(this.API_URL);
    }

    findById(id: number): Observable<Nota> {
        return this.http.get<Nota>(`${this.API_URL}/${id}`);
    }

    save(nota: Nota): Observable<Nota> {
        return this.http.post<Nota>(this.API_URL, nota);
    }

    update(nota: Nota): Observable<Nota> {
        return this.http.put<Nota>(`${this.API_URL}/${nota.id}`, nota);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }

}
