import { CasoClinico } from './../model/caso-clinico';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CasoClinicoService {

    constructor(private http: HttpClient){
    }

    findById(casoClinicoId: any): Observable<CasoClinico> {
        return this.http.get<CasoClinico>(`${API_CONFIG.baseUrl}/casos-clinicos/${casoClinicoId}`);
    }

    findAll(): Observable<CasoClinico[]> {
        return this.http.get<CasoClinico[]>(`${API_CONFIG.baseUrl}/casos-clinicos`,);
    }

    findByEspecialidade(especialidade: any): Observable<CasoClinico[]>{
           return this.http.get<CasoClinico[]>(`${API_CONFIG.baseUrl}/casos-clinicos/espec/${especialidade}`)
    }


    create(casoClinico: CasoClinico): Observable<CasoClinico>{
        return this.http.post<CasoClinico>(`${API_CONFIG.baseUrl}/casos-clinicos`, casoClinico);
    }

} 