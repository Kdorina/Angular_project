
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit{


  addPanel: boolean = false;
  show: boolean = false;
  addForm!: FormGroup;
  form!: FormGroup;
  subjects: any;

  constructor(private api:ApiService ,private router: Router,
              private formBuilder: FormBuilder,){}


ngOnInit(): void {
 this.index();

 this.addForm = this.formBuilder.group({
   subject: [''],
   grade: [''],
  });

 this.form = this.formBuilder.group({
   id: [''],
   subject: [''],
   grade: [''],
  });



}

index(){
  let jsonCurrentUser: any = localStorage.getItem("currentUser");
  let currentUser = JSON.parse(jsonCurrentUser);
  this.api.index(currentUser.token).subscribe({
      next: res=>{
        this.subjects = res;
        console.log(res);
      },
      error: err => {
        console.log('Hiba! A tantárgyak letöltése sikertelen!');
      }
    });
}

//tantárgy hozzáadás és eltárolása
add(){
  this.addPanel = true;
}

addSubjects(){
  let jsonCurrentUser: any = localStorage.getItem("currentUser");
  let currentUser = JSON.parse(jsonCurrentUser);
  let subject = {
    subject: this.addForm.value.subject,
    grade: this.addForm.value.grade,

  }
  this.api.store(subject, currentUser.token).subscribe({
    next:res =>{
      console.log(res);
      this.addPanel = false;
      this.index();
      this.addPanel = false;
  }
});
}

// tantárgy szerkeztése
editShow(subject:any){
  this.form.patchValue({id: subject.id});
  this.form.patchValue({subject: subject.subject});
  this.form.patchValue({grade: subject.grade});
  this.show = true;
}

updateSubject(){
  let jsonUserData: any = localStorage.getItem('currentUser');
  let currentUser = JSON.parse(jsonUserData);
  console.log(currentUser.name);
  console.log(currentUser.token);

  let subject = {
  id: this.form.value.id,
  subject: this.form.value.subject,
  grade: this.form.value.grade,
 }
  this.api.update(subject, currentUser.token).subscribe({
    next:res=>{
      console.log(res);
      this.show = false;
      this.index();
      this.show = false;
    }

      });
    }

//tantárgy törlés


destroy(id:any){
  let jsonUserData: any = localStorage.getItem('currentUser');
  let currentUser = JSON.parse(jsonUserData);
  this.api.delete(id, currentUser.token).subscribe({
    next:res=>{
      console.log(res);
      this.index();

  }
});
}
}
