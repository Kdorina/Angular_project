import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit{

  constructor(private file:FileService, private router: Router, private formBuilder: FormBuilder){
  }
  fileForm!:FormGroup;
  images:any;

  ngOnInit(): void {
   this.index();
   this.fileForm = this.formBuilder.group({
    file:null,
    description:['']

   })
  }

  index(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);

    this.file.index(currentUser.token).subscribe({
      next:res=>{
      this.images = res;
        console.log(this.images);

      }
    });
  }


  onFileChange(event:Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.fileForm.patchValue({
      file:file
    })
}

  addNewFile(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    const file:any = new FormData();
    file.append('imgpath', this.fileForm.controls['file'].value);
    file.append('description', this.fileForm.value.description)
    this.file.addFiles(file, currentUser.token).subscribe({
      next: res => {
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
