import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit{

  description:any;
  noteForm!: FormGroup;

  constructor( private noteService: NoteService, private api:ApiService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.getNotes();
    this.ActualSubjects();
    this.noteForm = this.formBuilder.group({
      note:['']
    })
  }

  getNotes(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.noteService.index(currentUser.token).subscribe({
      next: res=> {
        this.description = res;
        console.log(this.description);
      }
    })
  }
  actualSubs:any;
  ActualSubjects(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.api.actualSubjects(currentUser.token).subscribe({
      next:data=>{
        this.actualSubs = data;
        console.log(this.actualSubs);
      }
    })

  }

  addNote(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    let notes = this.noteForm.value.note
    this.noteService.store(notes, currentUser.token).subscribe({
      next: res => {
        console.log(res);
        this.getNotes();
      }
    })
  }

  deleteNote(id:any){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.noteService.delete(id, currentUser.token).subscribe({
      next: res=>{
        console.log(res)
        this.getNotes();
      }
    })
  }

}
