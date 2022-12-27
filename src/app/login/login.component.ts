import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  constructor( 
    private auth: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pass: [''],

    })
  }

  login(){
    let user = this.loginForm.value.email;
    let pass = this.loginForm.value.pass;
    
    this.auth.signIn(user, pass).subscribe({
      next: res => {
      if (res.success) {
        let data = JSON.stringify({
          token: res.data.token, 
          email: res.data.email
        });
        localStorage.setItem('currentUser', data);
        this.router.navigate(['groups']);
    }
  },
    error: err => {
      alert('Hiba! Az azonosítás sikertelen!')
    }
    });
    
  }
}
