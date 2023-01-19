import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
  
  }

  // navigateSub(){
  //   this.router.navigate(['/user/subject'])
  // }
  // navigateStat(){
  //   this.router.navigate(['/user/statist'])
  // }
  // navigateFile(){
  //   this.router.navigate(['/user/file'])
  // }
}
