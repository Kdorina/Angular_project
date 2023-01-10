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
  
  users:any;

  ngOnInit(){
    this.getUsers();
    this.countUser();
  }
  getUsers(){
   this.users= this.AdminService.getUsers().subscribe(user=>{
      this.users= user;
     
      console.log(user);
    });
  
  }
  count:any;
  num:any;
  countUser(){
    this.count= this.AdminService.countUsers().subscribe(sum=>{
      this.count= sum;
      
   this.num  = sum? sum.length : 0;
    console.log(this.num)
    });
  }
}
