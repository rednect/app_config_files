import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProfessorElement } from "../backend/model/professorElement";


@Injectable()
export class ProfessorElementService {
    elementApiUrl = 'http://localhost:3000/professors';
    constructor(private http: HttpClient) { }

    getProfessores(): Observable<ProfessorElement[]> {
        return this.http.get<ProfessorElement[]>(`${this.elementApiUrl}`);
    }

    createProfessores(Professores:ProfessorElement): Observable<ProfessorElement>{
        return this.http.post<ProfessorElement>(this.elementApiUrl, Professores);
    }

    editProfessores(id: number, Alunos: ProfessorElement): Observable<ProfessorElement>{
        return this.http.put<ProfessorElement>(`${this.elementApiUrl}/${id}`, Alunos);
    }

    deleteProfessores(id: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}/${id}`);
    }

}