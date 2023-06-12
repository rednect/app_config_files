import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurmaElement } from '../backend/model/turmaElement';
import { PresencaElement } from '../backend/model/presencaElement';
import { PresenceSourceData } from '../frontend/view-turmas/view-turmas.component';

@Injectable()
export class PresenceElementService {
    // elementApiUrl = 'https://appconfigfiles-production.up.railway.app'
    elementApiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getPresences(): Observable<PresenceSourceData[]> {
        return this.http.get<PresenceSourceData[]>(`${this.elementApiUrl}/presences`);
    }

    createPresences(Turmas: PresencaElement): Observable<PresencaElement> {
        return this.http.post<PresencaElement>(`${this.elementApiUrl}/presences/create`, Turmas);
      }

      
    deletePresences(id: number): Observable<any> {
        return this.http.delete<any>(`${this.elementApiUrl}/presences/${id}`);
    }

}