import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoElement } from '../backend/model/alunoElement';

@Injectable()
export class AlunoElementService {
    elementApiUrl = 'https://appconfigfiles-production.up.railway.app'
    // elementApiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getAlunos(): Observable<AlunoElement[]> {
        return this.http.get<AlunoElement[]>(`${this.elementApiUrl}/students`);
    }

    createAlunos(Alunos:AlunoElement): Observable<AlunoElement>{
        return this.http.post<AlunoElement>(`${this.elementApiUrl}/students`, Alunos);
    }

    editAlunos(id: number, Alunos: AlunoElement): Observable<AlunoElement>{
        return this.http.put<AlunoElement>(`${this.elementApiUrl}/students/${id}`, Alunos);
    }

    deleteAlunos(id: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}/students/${id}`);
    }

}