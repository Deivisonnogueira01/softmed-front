import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExamesImagem } from "../model/exames-imagem";
import { API_CONFIG } from "../config/api.config";
import { Observable, catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class ExamesImagemService {

    constructor(private http: HttpClient) {}


    create(examesImagemArray: any[], idCasoClinico: any): Observable<ExamesImagem[]> {
        return this.http.post<ExamesImagem[]>(
          `${API_CONFIG.baseUrl}/exames-imagem/?idCasoClinico=${idCasoClinico}`,
          examesImagemArray
        ).pipe(
          catchError(this.handleError)
        );
      }
    
      private handleError(error: HttpErrorResponse): Observable<any> {
        console.error('Ocorreu um erro:', error);
        return throwError('Erro ao processar a solicitação. Tente novamente mais tarde.');
      }
}