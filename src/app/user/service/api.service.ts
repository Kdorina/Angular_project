import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':' application/json'
    })
  };

  store(): Observable<any>{
    return this.http.post<any>
    (this.host+`subjects/`,this.httpOptions);
  }
  show(id:number): Observable<any> {
    return this.http.get<any>(this.host+`subjects/`+id);
  }

  update(id: number): Observable<any> {
    return this.http.put<any>(this.host+ `subjects/`+id, this.httpOptions);
  }

  destroy(id: any): Observable<any> {
    return this.http.delete<any>(this.host+ `subjects/`+id, this.httpOptions);
  }
}
