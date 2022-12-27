import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm !: FormGroup;
  constructor( private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: [''],
      password: [''],

    })
  }

  signIn(){
    let user = this.loginForm.value.email;
    let pass = this.loginForm.value.password;
    
    this.auth.signIn(user, pass).subscribe(res => {
      localStorage.setItem("token", res.token);
      localStorage.setItem("email", res.email);
    })
    console.error("sikerelen");
    
  }
}
