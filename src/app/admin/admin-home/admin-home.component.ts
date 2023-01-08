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
  
  users:any;

  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
   this.users= this.AdminService.getUsers().subscribe(user=>{
      this.users= user;
     
      console.log(user);
    });
  
  }
}
