import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './models/Aluno';


@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    private readonly API_URL = 'http://localhost:3000/alunos';

    constructor(private http: HttpClient) { }

    findAll(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(this.API_URL);
    }

    findById(id: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${this.API_URL}/${id}`);
    }

    save(aluno: Aluno): Observable<Aluno> {
        return this.http.post<Aluno>(this.API_URL, aluno);
    }

    update(aluno: Aluno): Observable<Aluno> {
        return this.http.put<Aluno>(`${this.API_URL}/${aluno.id}`, aluno);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }

}