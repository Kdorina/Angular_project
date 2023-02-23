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

  Allfiles(){

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

  result!:any;

  avgCalc(){
    // let grade = {
    //   id: this.form.value.id,
    //   subject: this.form.value.subject,
    //   grade: this.form.value.grade,
    //  }

    this.result = true;
  }
  choice(grade:any){
    this.form.patchValue({atlag: grade.atlag});
  }
}
