import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  index(token:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host+"subject", httpOption);
    
  };
  
 
  store(subject:any, token:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    let endpoint="subjects";
    let url = this.host + endpoint;
    return this.http.post<any>(url, subject, httpOption);
  }

  // store(): Observable<any>{
  //   return this.http.post<any>
  //   (this.host+`subjects/`,this.httpOptions);
  // }


  show(id:any): Observable<any> {
    return this.http.get<any>(this.host+`subjects/`+id);
  }


  update(subject:any, token:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };

    let endpoint="subjects/";
    let url = this.host + endpoint+subject.id
    return this.http.put<any>(url, subject, httpOption);
  }

  // destroy(id:any): Observable<any> {
  //   return this.http.delete<any>(this.host+ `subjects/`+id, httpOptions);
  // }


  delete(id: any){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    let token = currentUser.token;

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    });

    const httpOptions = {
      headers : httpHeaders
    };


    let endpoint="subjects/";
    let url = this.host + endpoint +id;
    return this.http.delete<any>(url, httpOptions);
  }

}
