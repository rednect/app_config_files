import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoElement } from '../backend/model/alunoElement';

@Injectable()
export class AlunoElementService {
    elementApiUrl = 'http://localhost:3000/students';
    constructor(private http: HttpClient) { }

    getAlunos(): Observable<AlunoElement[]> {
        return this.http.get<AlunoElement[]>(`${this.elementApiUrl}`);
    }

    createAlunos(Alunos:AlunoElement): Observable<AlunoElement>{
        return this.http.post<AlunoElement>(this.elementApiUrl, Alunos);
    }

    editAlunos(id: number, Alunos: AlunoElement): Observable<AlunoElement>{
        return this.http.put<AlunoElement>(`${this.elementApiUrl}/${id}`, Alunos);
    }

    deleteAlunos(id: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}/${id}`);
    }

}