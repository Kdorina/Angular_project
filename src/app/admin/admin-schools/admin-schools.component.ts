import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-schools',
  templateUrl: './admin-schools.component.html',
  styleUrls: ['./admin-schools.component.scss']
})
export class AdminSchoolsComponent implements OnInit{


  searchPanel!:any;
  actualBuilding!:string;

  constructor( private admin : AdminService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.Schools();
  }

  search(){
    this.searchPanel = true;
  }

  schools:any;
  numSchool:any;
  Schools(){
  this.admin.Schools().subscribe(data=>{
      this.schools = data ;
      console.log(this.schools);

    });
  }

}
