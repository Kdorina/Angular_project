import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StatisticService } from 'src/app/service/statistic.service';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent implements OnInit{

  form!: FormGroup;

  constructor(private statistic: StatisticService, private router : Router, private formBuilder:FormBuilder){}

  ngOnInit(): void {
  this.argAll();
  this.avgGradesSubjects();
  this.CountNotes();
  this.CountFiles();


  this.form = this.formBuilder.group({
    input:[''],
    atlag:[''],
    result:[''],
  });
  }
  show:any;
  avarageAll:any;
  argAll(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.statistic.avarageAllSubject(currentUser.token).subscribe(res=>{
    this.avarageAll = res;
    this.show = this.avarageAll;
    console.log(this.show)
    });
  
  }

  showFile!:any;
  CountFiles(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.statistic.CountFile(currentUser.token).subscribe({
      next:res =>{
        
        this.showFile = res;
        console.log(this.showFile);
  
      }
    
    });
  }
  countNote!:any;
  CountNotes(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.statistic.Count(currentUser.token).subscribe({
      next:data=>{
        this.countNote = data;
        console.log(this.countNote);
      }
    })
  }

  grades!:any;
  avgGradesSubjects(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.statistic.avgGradesSubjects(currentUser.token).subscribe({
      next: data => {
        this.grades = data;
        console.log(this.grades);
            }
    })
  }

  
}
