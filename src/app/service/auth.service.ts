import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  logout(email: string, token: string) {
    const userData = {
      email: email,
      tokenId: token
    }
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'logout';
    let url = this.host + endpoint;
    console.log(userData.email)
    return this.http.post<any>(url, userData, httpOptions);
  }
  
}
