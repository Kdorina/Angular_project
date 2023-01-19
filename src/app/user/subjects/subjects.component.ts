
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit{
  constructor(private api:ApiService ){}

  data: any;
  grade :any;


ngOnInit(): void {
 this.index();

}

add(){
this.grade = true;
}

index(){
   this.data= this.api.index().subscribe((res)=>{
    this.data = res;
    console.log(this.data)
  })
}

//tantárgy hozzáadás és eltárolása

subjects: any;

store(newSubject:string){
this.subjects ={
  'subject':newSubject,
};

this.api.store().subscribe(res=>{
  this.subjects = res
});
console.log(this.subjects);
}


//tantárgy szerkeztése

subjectId: any;
editSubject: any;

update(clickSubject:string){

  this.api.update(this.subjectId).subscribe((res)=>{
    console.log("Sikeres szerkeztés!");
  })

}
show: any;
editShow(){
  this.show = true;
}

//tantárgy törlése

destroy(id:any){
  this.api.destroy(id).subscribe(res=>{

    console.log(res);
  }
  );
}

}
