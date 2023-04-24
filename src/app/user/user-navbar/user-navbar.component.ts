import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit{

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn();
  }
  userNavbar = false;
  loggedIn:any;
  currentU:any;
  isLoggedIn(){
    let jsonCurrentUser: any = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(jsonCurrentUser);
    console.log(currentUser.name);
    this.currentU = currentUser.name
    this.loggedIn = true;
  }

  user(){
    this.userNavbar = !this.userNavbar;
  }
  logout(){
    let jsonCurrentUser: any = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(jsonCurrentUser);
    console.log(currentUser.name);
    this.auth.logout(currentUser.email, currentUser.token).subscribe({
      next: res => {
        console.log(res);
        localStorage.removeItem("currentUser");
        this.router.navigate(['home'])
      }
    });

  }
}
