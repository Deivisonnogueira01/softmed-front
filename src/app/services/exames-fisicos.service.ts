import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TestesFarmacologicos } from "../model/testes-farmacologicos";
import { Observable } from "rxjs";
import { ExamesFisicos } from "../model/exames-fisicos";
import { API_CONFIG } from "../config/api.config";

@Injectable({
    providedIn: 'root'
})
export class ExamesFisicosService {

    constructor(private http: HttpClient) {}


    create(examesFisicos: ExamesFisicos, idCasoClinico: any): Observable<ExamesFisicos>{
        return this.http.post<ExamesFisicos>(`${API_CONFIG.baseUrl}/exames-fisicos/?idCasoClinico=${idCasoClinico}`, examesFisicos);

    }

}