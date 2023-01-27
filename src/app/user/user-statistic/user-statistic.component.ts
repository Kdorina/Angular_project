import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticService } from 'src/app/service/statistic.service';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent implements OnInit{
  

  constructor(private statistic: StatisticService, private router : Router){}

  ngOnInit(): void {
  this.argAll();
  }
  show:any;
  avarageAll:any;
  argAll(){
    this.statistic.avarageAllSubject().subscribe(res=>{
    this.avarageAll = res;
    this.show = this.avarageAll;
    console.log(this.show)
    });
  
  }
  
}
