
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControlName} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  image:string = "assets/images/pic.jpg";

  form!: FormGroup;
  title = "User-Login";
  submitted!: boolean;

  constructor( 
    private auth: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router) { }

  
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        email:[''],
        pass: ['']
      });
      }
    
      login(){
        let email = this.form.value.email;
        let pass = this.form.value.pass;

        this.auth.login(email, pass)
        .subscribe( res => {

            console.log(res.data.token);
            console.log(res.name);

          if(res.success) {

            localStorage.setItem('currentUser', JSON.stringify({token: res.data.token, name: res.data.name}));

            this.router.navigate(['/user/Uhome']);

          }
          else 
          {
            alert('A belépés sikertelen!');
          }
        })


      }
}