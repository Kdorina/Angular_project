import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit{

  imageDirectoryPath:any = '/storage/app/'

  constructor(private file:FileService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
   this.index();

   this.fileForm = this.formBuilder.group({
    description: [''],
    image: [''],

   })
  }
  fileForm!:FormGroup;
  images:any;

  index(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.file.index(currentUser.token).subscribe({
      next:res=>{
      this.images =res;
        console.log(this.images);
      }
    });
  }


  addNewFile(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
      let description = this.fileForm.value.description;
      let image = this.fileForm.value.image;

    this.file.addFiles(image, description, currentUser.token).subscribe({
      next: res => {
        // this.images = res;
        console.log(res);
        this.index();
      }
    })
  }


  Delete(id:any){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.file.Delete(id, currentUser.token).subscribe({
      next:res=>{
        console.log(res)
        this.index(); //<= egyből vissza adja a törölt értéket az oldalon , nem kell frissiteni
      }
    })
  }
}
