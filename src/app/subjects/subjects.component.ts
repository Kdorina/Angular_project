
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit{
  constructor(private api:ApiService, ){}

  data: any;
  
ngOnInit(): void {
 this.index()
}


index(){
   this.api.index().subscribe((res)=>{
    this.data = res;
    console.log(res)
  })
}

}
