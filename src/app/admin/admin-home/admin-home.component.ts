import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.getWomens();
    this.getMens();
    this.getElse();
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
  // age:any;
  showAge:any;
  age!:any;
  ageAvg!:any;
  ageOfUsers(){
    this.AdminService.ageOfUsers().subscribe(data=>{
      this.showAge = data;
      console.log(this.showAge);
    });
   
 

  }
schools:any;
numSchool:any;
  Schools(){
  this.AdminService.Schools().subscribe(data=>{
      this.schools = data ;
      console.log(this.schools);

      this.numSchool = data? data.length : 0;
    });
  }

   womens!:any;
  getWomens(){
    this.AdminService.getWomens().subscribe({
      next:data => {
        this.womens = data;
        console.log(this.womens);
      }
    })
  }
 
  mens!:any;
  getMens(){
    this.AdminService.getMens().subscribe({
      next:data => {
        this.mens = data;
        console.log(this.mens);
      }
    })
  }
  elseG!:any;
  getElse(){
    this.AdminService.getElse().subscribe({
      next:data => {
        this.elseG = data;
        console.log(this.elseG);
      }
    })
  }

}


