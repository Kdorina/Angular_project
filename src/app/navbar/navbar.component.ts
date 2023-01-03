import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navbar: any;

  show(){
  this.navbar = true;
  }
  close(){
  this.navbar = false;
  }

}
