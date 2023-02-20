import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<User> {
    return this.http.get<User>(`${API_CONFIG.baseUrl}/user/${id}`);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${API_CONFIG.baseUrl}/user`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${API_CONFIG.baseUrl}/user`, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${API_CONFIG.baseUrl}/user/${user.id}`, user);
  }

  delete(id: any): Observable<User> {
    return this.http.delete<User>(`${API_CONFIG.baseUrl}/user/${id}`);
  }
}
