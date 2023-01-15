import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  host = 'http://localhost:8000/api/'

  constructor( private http: HttpClient) { }

  
//LOGIN
login(email: string, pass:string){
  let authData =
  {
    email: email,
    password: pass
  }
  let httpHeaders = new HttpHeaders();
  httpHeaders.set('Content-Type', 'application/json');
  const httpOptions = {
    headers: httpHeaders
  }
  let endpoint = 'login';
  let url = this.host + endpoint;
  return this.http.post<any>(url, authData, httpOptions);
}


  getUsers(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'user';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);

  }
  countUsers(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'sum';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);

  }
  ageOfUsers(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'age';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);

  }


}