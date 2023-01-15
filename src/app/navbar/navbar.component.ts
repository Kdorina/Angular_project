import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  homeNavbar= false;

  home(){
  this.homeNavbar = !this.homeNavbar;
  }
  show(){
    console.log("ooooo")
  }

}
