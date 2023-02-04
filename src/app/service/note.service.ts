import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get<any>(this.host+"note");
    
  };

  store(notes:any){
    // let token = localStorage.getItem('token');
    let description={
      note:notes
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    let endpoint="notes";
    let url = this.host + endpoint;
    return this.http.post<any>(url, description, httpOption);
  }

  delete(id:any){
    // let token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    let endpoint="notes/";
    let url = this.host + endpoint +id;
    return this.http.delete<any>(url, httpOption);
  }

}
