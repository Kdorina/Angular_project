import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

 
  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  index(token:string){
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Content-Type': 'image/jpeg',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host+"image", httpOption);
    
  };
  
 
  addFiles(file:any, token:string){
 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };

    let endpoint="images";
    let url = this.host + endpoint;
    return this.http.post<any>(url,file, httpOption);
  }

  Delete(id:any, token:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };

    let endpoint="images/";
    let url = this.host + endpoint;
    return this.http.delete<any>(url +id, httpOption);
  }
}
