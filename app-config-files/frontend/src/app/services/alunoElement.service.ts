import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoElement } from '../backend/model/alunoElement';

@Injectable()
export class AlunoElementService {
    elementApiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getAlunos(): Observable<AlunoElement[]> {
        return this.http.get<AlunoElement[]>(`${this.elementApiUrl}/students`);
    }
}