
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
              private formBuilder: FormBuilder,
              private route: ActivatedRoute){}


ngOnInit(): void {
 this.index();

 this.addForm = this.formBuilder.group({
   subject: ['',Validators.required],
   grade: ['', Validators.required],
  });
   
 this.form = this.formBuilder.group({
   id: [''],
   subject: [''],
   grade: [''],
  });
   


}

index(){
  this.api.index().subscribe({
      next: res=>{
        this.subjects = res;
        console.log(res);
      },
      error: err => {
        console.log('Hiba! A dolgozók letöltése sikertelen!');
      }
    });
}

//tantárgy hozzáadás és eltárolása

addSubjects(){
  let subject = {
    subject: this.addForm.value.subject,
    grade: this.addForm.value.grade,

  }
  this.api.store(subject).subscribe({
    next:res =>{
      console.log(res);

  }
});

}

add(){
  this.addPanel = true;
}



// tantárgy szerkeztése
editShow(subject:any){
  this.form.patchValue({id: subject.id});
  this.form.patchValue({subject: subject.subject});
  this.form.patchValue({grade: subject.grade});
  this.show = true;
}

updateSubject(){
 let subject = {
  id: this.form.value.id,
  subject: this.form.value.subject,
  grade: this.form.value.grade,

 }
  this.api.update(subject).subscribe({
    next:res=>{
      console.log(res);
      this.show = false;
    }
        
      });
    }

//tantárgy törlés


destroy(id:any){
  this.api.delete(id).subscribe({
    next:res=>{
      console.log(res);
      
  }
});
}
}
