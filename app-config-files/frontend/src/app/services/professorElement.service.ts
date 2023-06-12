import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProfessorElement } from "../backend/model/professorElement";


@Injectable()
export class ProfessorElementService {
    elementApiUrl = 'https://appconfigfiles-production.up.railway.app';
    constructor(private http: HttpClient) { }

    getProfessores(): Observable<ProfessorElement[]> {
        return this.http.get<ProfessorElement[]>(`${this.elementApiUrl}/professors`);
    }

    createProfessores(Professores:ProfessorElement): Observable<ProfessorElement>{
        return this.http.post<ProfessorElement>(`${this.elementApiUrl}/professors/create`, Professores);
    }

    editProfessores(id: number, Alunos: ProfessorElement): Observable<ProfessorElement>{
        return this.http.put<ProfessorElement>(`${this.elementApiUrl}/${id}`, Alunos);
    }

    deleteProfessores(id: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}/professors/${id}`);
    }

}