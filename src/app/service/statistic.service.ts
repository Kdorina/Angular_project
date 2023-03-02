import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  avarageAllSubject(token:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    let endpoint="argAll";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }

  avgGradesSubjects(token:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    let endpoint="grade";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }

  //Todo lista megszámlálása
  Count(token:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };

    let endpoint="countNote";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }

  //files megszámlálása
  CountFile(token:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };

    let endpoint="countFile";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }


}
