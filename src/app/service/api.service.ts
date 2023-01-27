import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get('http://localhost:8000/api/subject');
    
  };

  // httpOptions = {
  //   headers : new HttpHeaders({
  //     'Content-Type':' application/json'
  //   })
  // };

  store(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);

    let httpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${currentUser.token}`);

    const httpOptions = {
      headers : HttpHeaders
    }
    let endpoint="subjects";
    let url = this.host + endpoint;
    return this.http.post<any>(url, httpOptions);
  }
  // store(): Observable<any>{
  //   return this.http.post<any>
  //   (this.host+`subjects/`,this.httpOptions);
  // }


  show(id:number): Observable<any> {
    return this.http.get<any>(this.host+`subjects/`+id);
  }

  // update(id: number): Observable<any> {
  //   return this.http.put<any>(this.host+ `subjects/`+id, httpOptions);
  // }

  update(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);

    let httpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${currentUser.token}`);

    const httpOptions = {
      headers : HttpHeaders
    }
    let endpoint="subjects";
    let url = this.host + endpoint;
    return this.http.post<any>(url, httpOptions);
  }

  // destroy(id:any): Observable<any> {
  //   return this.http.delete<any>(this.host+ `subjects/`+id, httpOptions);
  // }


  destroy(id: any){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);

    let httpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${currentUser.token}`);

    const httpOptions = {
      headers : HttpHeaders
    }
    let endpoint="subjects";
    let url = this.host + endpoint + '/' +id;
    return this.http.post<any>(url, httpOptions);
  }

}
