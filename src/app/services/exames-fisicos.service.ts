import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TestesFarmacologicos } from "../model/testes-farmacologicos";
import { Observable, catchError, throwError } from "rxjs";
import { ExamesFisicos } from "../model/exames-fisicos";
import { API_CONFIG } from "../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class ExamesFisicosService {

  constructor(private http: HttpClient) {}

  create(examesFisicosArray: any[], idCasoClinico: any): Observable<ExamesFisicos[]> {
    return this.http.post<ExamesFisicos[]>(
      `${API_CONFIG.baseUrl}/exames-fisicos/?idCasoClinico=${idCasoClinico}`,
      examesFisicosArray
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Erro ao processar a solicitação. Tente novamente mais tarde.');
  }
}
