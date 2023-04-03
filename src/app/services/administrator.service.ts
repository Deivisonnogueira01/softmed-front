import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Administrator} from '../model/administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(`${API_CONFIG.baseUrl}/admin`);
  }

  create(user: Administrator): Observable<Administrator> {
    return this.http.post<Administrator>(`${API_CONFIG.baseUrl}/admin`, user);
  }

 
}
