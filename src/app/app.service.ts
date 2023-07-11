import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    private url = "http://localhost:8080/";

    deleteUser(id: number): Observable<any>{
        console.log(id);
        return this.http.delete<any>(`${this.url}api/employees/${id}`)
      }

    getUsers(): Observable<any[]>{
    console.log("In get employee service");
    return this.http.get<any[]>(this.url+'api/employees')
  }
   // Add User - Create
   adduser(user: Employee){
    return this.http.post<Employee>(`${this.url}api/employees/new`, user)
  }

  // Update User - Update
  updateUser(id?: number ,user?: Employee): Observable<any>{
    return this.http.put<any>(`${this.url}api/employees/${id}`, user)
  }
  // Get User by Id - Read
  getUserById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.url}api/employees/${id}`)
  }

}