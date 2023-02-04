import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit{

  description:any;
  noteForm!: FormGroup;

  constructor( private noteService: NoteService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.getNotes();
    this.noteForm = this.formBuilder.group({
      note:['']
    })
  }

  getNotes(){
    this.noteService.index().subscribe({
      next: res=> {
        this.description = res;
        console.log(this.description);
      }
    })
  }
  addNote(){
    let notes = this.noteForm.value.note
    this.noteService.store(notes).subscribe({
      next: res => {
        console.log(res);
        // this.getNotes();
      }
    })
  }


  // navigateSub(){
  //   this.router.navigate(['/user/subject'])
  // }
  // navigateStat(){
  //   this.router.navigate(['/user/statist'])
  // }
  // navigateFile(){
  //   this.router.navigate(['/user/file'])
  // }
}
