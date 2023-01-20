import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private AdminService: AdminService, private router: Router) { }
  
 

  ngOnInit(){
    this.getUsers();
    this.countUser();
    this.ageOfUsers();
    this.Schools();
  }


  // USERS IN TABLE
  users:any;
  getUsers(){
   this.users= this.AdminService.getUsers().subscribe(user=>{
      this.users= user;
     
      // console.log(user);
    });
  
  }

  // USERS NUMBER
  count:any;
  num:any;
  countUser(){
    this.count= this.AdminService.getUsers().subscribe(data=>{
      this.count= data;
      
   this.num  = data? data.length : 0;
    // console.log(this.num)
    });
  }

  //USERS AGE
  age:any;
  showAge:any;
  ageOfUsers(){
    this.AdminService.ageOfUsers().subscribe(data=>{
      this.age = data ;
      console.log(this.age)
    });
   
 

  }
schools:any;

  Schools(){
  this.AdminService.Schools().subscribe(data=>{
      this.schools = data ;
      console.log(this.schools);
    })
  }

}
