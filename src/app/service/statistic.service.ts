import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  avarageAllSubject(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const httpOptions = {
      headers : httpHeaders
    };

    let endpoint="argAll";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOptions);
  }
}
