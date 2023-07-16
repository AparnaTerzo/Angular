import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Employee } from './Employee';
import { Leave } from './Leave';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  
    constructor(private http: HttpClient) { }

    private url = "http://localhost:8080/";

    deleteUser(id: number): Observable<any>{
        console.log(id);
        const jwtToken = localStorage.getItem('jwtToken');
        const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
        return this.http.delete<any>(`${this.url}api/employees/${id}`,{headers})
      }

    getUsers(): Observable<any[]>{
    console.log("In get employee service");
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.get<any[]>(this.url+'api/employees',{headers})
  }
   // Add User - Create
   adduser(user: Employee){
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.post<Employee>(`${this.url}api/employees/new`, user,{headers})
  }

  login(user: any):Observable<any>{
    return this.http.post(`${this.url}auth/login`, user)
  }
  // Update User - Update
  updateUser(id?: number ,user?: Employee): Observable<any>{
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.put<any>(`${this.url}api/employees/${id}`, user,{headers})
  }
  // Get User by Id - Read
  getUserById(id: number): Observable<any>{
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.get<Employee>(`${this.url}api/employees/${id}`,{headers})
  }
  
  searchUsers(query:string):Observable<any[]>{
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    console.log("In search employee service");
    return this.http.get<any[]>(this.url+`api/employees/search/${query}`,{headers})
  }
  sortUsers(query:string):Observable<any[]>{
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    console.log("In search employee service");
    return this.http.get<any[]>(this.url+`api/sort/${query}`,{headers})
  }


  getHolidays(): Observable<any[]>{
    console.log("Holidays");
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.get<any[]>(this.url+'api/holidays',{headers})
  }

  logout(): Observable<any> {
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    localStorage.removeItem('jwtToken');
    return this.http.post<any>(`${this.url}auth/logout`, { headers });
  }

  applyleave(user: Leave){
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.post<Leave>(`${this.url}api/apply`, user,{headers})
  }
  getBirthdays(): Observable<any[]>{
    console.log("In get Birthday service");
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.get<any[]>(this.url+'api/birthday',{headers})
  }

  getAnniversarys(): Observable<any[]>{
    console.log(" Work Anniversary");
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.get<any[]>(this.url+'api/anniversary',{headers})
  }
  getHires(): Observable<any[]>{
    console.log(" Work Anniversary");
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
    return this.http.get<any[]>(this.url+'api/hires',{headers})
  }

  getEmployeeById(id: number): Observable<Employee>{
    const jwt=localStorage.getItem('jwtToken');
  const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
  return this.http.get<Employee>(`${this.url}api/employee/${id}/view`,{headers})
  }
  getRole(email: string) :Observable<any>{
    return this.http.get(`${this.url}api/role/${email}`)
  }

  getEmployeeByEmail(email: string): Observable<Employee>{
    const jwt=localStorage.getItem('jwtToken');
  const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
  return this.http.get<Employee>(`${this.url}api/employee/${email}/get`,{headers})
  }
}