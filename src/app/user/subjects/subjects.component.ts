
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

  users: any;
  grade :any;


ngOnInit(): void {
 this.index();
}

add(){
this.grade = true;
}

index(){
   this.users= this.api.index().subscribe((res)=>{
    this.users = res;
    console.log(this.users)
  })
}

//tantárgy hozzáadás és eltárolása

subjects: any;

store(newSubject:string){
this.subjects ={
  'subject':newSubject,
};

this.api.store().subscribe({
  next:res =>{
    console.log(res);
    this.subjects.pus(res);

  }
});

}


//tantárgy szerkeztése

subjectId: any;
editSubject: any;

// update(clickSubject:string){

//   this.api.update(this.subjectId).subscribe((res)=>{
//     console.log("Sikeres szerkeztés!");
//   })

// }
// show: any;
editShow(){
  // this.show = true;
}
destroy(){
  // this.show = true;
}
update(){
  // this.show = true;
}


//tantárgy törlése

// destroy(user:any){
//   this.api.destroy(user.id).subscribe({
//     next:res=>{
//       console.log(res);
//       this.users.forEach((auth: any, index:number) => {
//         if(auth.id === user.id){
//           this.auth.splice(index,1)
//         }
//       })

//     }
//   });
// }
}
