import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  host = 'http://localhost:8000/api/'

  constructor( private http: HttpClient) { }

  
//LOGIN
adminLogin(email: string, pass:string){
  let adminData =
  {
    email: email,
    password: pass
  }
  let httpHeaders = new HttpHeaders();
  httpHeaders.set('Content-Type', 'application/json');
  const httpOptions = {
    headers: httpHeaders
  }
  let endpoint = 'adminLog';
  let url = this.host + endpoint;
  return this.http.post<any>(url, adminData, httpOptions);
}
 
logout() {
  if(localStorage.getItem('currentUser') === null){
    return;
  }
  let data:any = localStorage.getItem('currentUser');
  localStorage.removeItem('currentUser');
  let currentUser = JSON.parse(data);
  let token = currentUser.token;
  let httpHeaders = new HttpHeaders();
  httpHeaders.set('Content-Type', 'application/json');

  const httpOptions = {
    headers: httpHeaders
  }
  let endpoint = 'logout';
  let url = this.host + endpoint;
  return this.http.post<any>(url, httpOptions);
}


isLoggedIn(){
  if(localStorage.getItem('currentUser') === null){
    return false;
  }
  let data:any = localStorage.getItem('currentUser');
  let userData = JSON.parse(data);
  let token = userData.token;
  return token;
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