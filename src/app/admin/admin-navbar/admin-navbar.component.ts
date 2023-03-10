import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{
  
  constructor(private adminSerivce: AdminService, private router: Router){}
  
  ngOnInit(): void {
    
  }

  adminNavbar = false;

  admin(){
    this.adminNavbar = !this.adminNavbar;
  }

  logout(){

    let jsonCurrentUser: any = localStorage.getItem('currentUser')
    let currentUser = JSON.parse(jsonCurrentUser);
    this.adminSerivce.logout(currentUser.email, currentUser.token).subscribe({
     next:data =>{
      console.log('Kilépés',data);
      localStorage.removeItem('currentUser')
      this.router.navigate(['admin/login'])
     }
    });
   
}
}
