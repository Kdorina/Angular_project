import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent implements OnInit{

  constructor(private AdminService:AdminService){}

  ngOnInit(): void {
   this.getUsers();
   this.usersSubjects();
   this.getWomens();
   this.getMens();
   this.getElse();
    
  }
  users:any;
  getUsers(){
   this.users= this.AdminService.getUsers().subscribe(user=>{
      this.users= user;
     
      // console.log(user);
    });
  
  }
  subs!:any;
  usersSubjects(){
    this.subs = this.AdminService.usersSubjects().subscribe({
      next:data=>{
        this.subs = data;
      }
    })
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
