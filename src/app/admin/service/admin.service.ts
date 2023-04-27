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

logout(email:any, token:string) {
  let adminData ={
    email: email,
    token: token
  }

  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  })

  let httpOptions = {
    headers: headers
  }
  let endpoint = 'adminLogout';
  let url = this.host + endpoint;
  return this.http.post<any>(url,adminData, httpOptions);
}


isLoggedIn(){
  if(localStorage.getItem('currentAdmin') === null){
    return false;
  }
  let data:any = localStorage.getItem('currentAdmin');
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

  Schools(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'allBuilding';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);

  }

  usersSubjects(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint ='usersSubjects';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);
  }


  getWomens(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint ='womens';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);
  }

  getMens(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint ='mens';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);
  }

  getElse(){
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint ='else';
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);
  }


}
