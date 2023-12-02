import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { ExamesSoroLab } from "../model/exames-soro-lab";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ExamesSoroLabService {


    constructor(private http: HttpClient) {}

  create(examesSoroLabArray: any[], idCasoClinico: any): Observable<ExamesSoroLab[]> {
    return this.http.post<ExamesSoroLab[]>(
      `${API_CONFIG.baseUrl}/exames-soro/?idCasoClinico=${idCasoClinico}`,
      examesSoroLabArray
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Erro ao processar a solicitação. Tente novamente mais tarde.');
  }


}