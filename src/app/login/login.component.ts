
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
        email:['', Validators.required],
        password: ['', Validators.required]
      });
      }
    
      login(){
        let email = this.form.value.email;
        let pass = this.form.value.password;

        this.auth.login(email, pass)
        .subscribe({
          next:data =>{
          
        //   localStorage.setItem('token', data.data.token);
        //   localStorage.setItem('name', data.data.name);
        //   console.log(' Az azonosítás sikeres!');
          
        //   if(data.success){
        //     this.router.navigate(['Uhome']);
        //   }
        // },
        // error: err => {
        //   console.log('Hiba! Az azonosítás sikertelen!')
        // }

        
            console.log(data.data.token);
            console.log(data.data.name);

            if(data.success) {

            localStorage.setItem('currentUser', JSON.stringify({token: data.data.token, name: data.data.name}));

            this.router.navigate(['user/Uhome']);

            }
          else 
          {
            alert('A belépés sikertelen!');
        }
      }
        });
    }
}