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

  constructor(private file:FileService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
   this.index();

   this.fileForm = this.formBuilder.group({
    file: ['']
   })
  }
  fileForm!:FormGroup;
  files:any;

  index(){
    this.file.index().subscribe({
      next:res=>{
      this.files =res;
        // console.log(this.files);
      }
    });
  }

  addNewFile(){
    let file ={
      file: this.fileForm.value.file

    }
    this.file.addFiles(file).subscribe({
      next: res => {
        console.log(res);
      }
    })
  }



  Delete(id:any){
    this.file.Delete(id).subscribe({
      next:res=>{
        console.log(res)
      }
    })
  }
}
