import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  index(token:string){
    
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    });

    const httpOptions = {
      headers : httpHeaders
    };
    return this.http.get<any>(this.host+"note", httpOptions);
    
  };

  store(notes:any, token:string){

    let description={
      note:notes
    }
   
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    });

    const httpOptions = {
      headers : httpHeaders
    };
    let endpoint="notes";
    let url = this.host + endpoint;
    return this.http.post<any>(url, description, httpOptions);
  }

  delete(id:any, token:string){

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token
    });

    const httpOptions = {
      headers : httpHeaders
    };

    let endpoint="notes/";
    let url = this.host + endpoint +id;
    return this.http.delete<any>(url, httpOptions);
  }

}
