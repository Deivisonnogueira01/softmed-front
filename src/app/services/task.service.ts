import { Task } from 'src/app/model/task';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class TaskService {

    constructor(private http: HttpClient) {}


    create(task: Task): Observable<Task>{
        return this.http.post<Task>(`${API_CONFIG.baseUrl}/task`, task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${API_CONFIG.baseUrl}/task`, task);
    }

    deleteTask(id: any): Observable<Task> {

        return this.http.delete<Task>(`${API_CONFIG.baseUrl}/task/${id}`);
    }

}