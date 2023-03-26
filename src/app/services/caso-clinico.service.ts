import { Injectable } from '@angular/core';
import { API_CONFIG } from './../../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CasoClinico } from '../model/caso-clinico';


@Injectable({
    providedIn: 'root'
})
export class CasoClinicoService {

    constructor(private http: HttpClient){

    }

    findById(id: any): Observable<CasoClinico> {
        return this.http.get<CasoClinico>(`${API_CONFIG.baseUrl}/casos-clinicos/${id}`);
    }

    findAll(): Observable<CasoClinico[]> {
        return this.http.get<CasoClinico[]>(`${API_CONFIG.baseUrl}/casos-clinicos`)
    }

}