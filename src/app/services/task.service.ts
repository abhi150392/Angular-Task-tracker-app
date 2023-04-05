import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';
// import { TASKS } from '../mock-tasks';
// import { Observable, of } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     ' content-type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private url: HttpClient) {}

  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  // }
  getTasks(): Observable<Task[]> {
    return this.url.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.url.delete<Task>(url);
  }

  toggleReminder(task: Task): Observable<Task> {
    const uri = `${this.apiUrl}/${task.id}`;
    return this.url.put<Task>(uri, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.url.post<Task>(this.apiUrl, task);
  }
}
