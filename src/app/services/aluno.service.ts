
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = 'https://railway.app/project/e6bb5fc3-a733-42e1-8d15-8b08b437d3cb/service/bbaed6e5-6d13-4799-9cb2-1e20fce35ebd?id=acaf6b92-8437-48c1-a507-8f7eda6bba96'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os alunos
  getAlunos(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um aluno pelo id
  getAlunoById(id: number): Observable<Aluno> {
    return this.httpClient.get<Aluno>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um aluno
  saveAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(this.url, JSON.stringify(aluno), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um carro
  updateAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.put<Aluno>(this.url + '/' + aluno.id, JSON.stringify(aluno), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um carro
  deleteAluno(aluno: Aluno) {
    return this.httpClient.delete<Aluno>(this.url + '/' + aluno.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}