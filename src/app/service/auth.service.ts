import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = 'http://localhost:8000/api/'

  constructor( private http: HttpClient) { }

//LOGIN
  login(name: string, pass:string){
    let authData =
    {
      name: name,
      password: pass
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    let endpoint = 'login';
    let url = this.host + endpoint;
    return this.http.post<any>(url, authData, httpOption);
  }


  
  register(buildingName:any, name:any, email:any, birthday:any, gender:any, 
          pass:any, conf_pass:any
          ){
    let newAuthData =
    {
      buildingName: buildingName,
      name: name,
      email: email,
      date_of_birth:birthday,
      gender: gender,
      password: pass,
      confirm_password: conf_pass
    }
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'register';
    let url = this.host + endpoint;
    return this.http.post<any>(url, newAuthData, httpOptions);
  }
  
  logout(name: string, token:string) {
    let authData =
    {
      name: name,
      token: token
    }
    let httpHeaders  = new HttpHeaders()
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'logout';
    let url = this.host + endpoint;
    return this.http.post<any>(url, authData, httpOptions);
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
}
