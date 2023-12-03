import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TestesFarmacologicos } from "../model/testes-farmacologicos";
import { API_CONFIG } from "../config/api.config";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class TestesFarmaService {


    constructor(private http: HttpClient) {}

  create(testesFarmaArray: any[], idCasoClinico: any): Observable<TestesFarmacologicos[]> {
    return this.http.post<TestesFarmacologicos[]>(
      `${API_CONFIG.baseUrl}/teste-farma/?idCasoClinico=${idCasoClinico}`,
      testesFarmaArray
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Erro ao processar a solicitação. Tente novamente mais tarde.');
  }

}