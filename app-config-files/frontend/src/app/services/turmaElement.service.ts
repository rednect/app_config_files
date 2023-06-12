import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaElement } from '../backend/model/turmaElement';

@Injectable()
export class TurmaElementService {
    elementApiUrl = 'https://appconfigfiles-production.up.railway.app'
    // elementApiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getTurmas(): Observable<TurmaElement[]> {
        return this.http.get<TurmaElement[]>(`${this.elementApiUrl}/classes/getAll`);
    }

    createTurmas(Turmas:TurmaElement): Observable<TurmaElement>{
        return this.http.post<TurmaElement>(`${this.elementApiUrl}/classes/create`, Turmas);
    }

    // editAlunos(id: number, Alunos: TurmaElement): Observable<TurmaElement>{
    //     return this.http.put<TurmaElement>(`${this.elementApiUrl}//${id}`, Alunos);
    // }

    // deleteAlunos(id: number): Observable<any> {
    //     return this.http.delete<any>(`${this.elementApiUrl}//${id}`);
    // }

}