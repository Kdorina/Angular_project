import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  host = 'http://localhost:8000/api/'

  constructor( private http: HttpClient) { }


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
//  getUsers(){
//     return this.http.get<any>(this.host+'user');
//   }
//   httpOptions = {
//     headers : new HttpHeaders({
//       'Content-Type':' application/json'
//     })
//   };
}