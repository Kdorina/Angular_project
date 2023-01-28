import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

 
  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get<any>(this.host+"allFile");
    
  };
  
 
  addFiles(file:any){
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

    let endpoint="addFile";
    let url = this.host + endpoint;
    return this.http.post<any>(url, httpOptions);
  }

  Delete(id:any){
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

    let endpoint="deleteFile/";
    let url = this.host + endpoint;
    return this.http.delete<any>(url +id, httpOptions);
  }
}
