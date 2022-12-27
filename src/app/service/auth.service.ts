import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor( private http: HttpClient) { }

//LOGIN
  signIn(email: string, pass:string){
   let host = 'http://localhost:8000/api/login'
    let userData =
    {
      email: email,
      pass: pass
    }
    let userDataJson =JSON.stringify(userData);
    // let header = new HttpHeaders({
    //   "Content-Type": "application/json"
    // });
    // let httpOption =
    // {
    //   headers : header
    // };

    let endpoint = "login";
    // let url = this.host + endpoint;
    return this.http.post<any>(host, userData)

  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') === null) {
      return false;
    }    
    let data:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(data);
    let token = currentUser.token;
    return token;
  }
}
