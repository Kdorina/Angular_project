import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
image:string = "assets/images/pic.jpg";
form!:FormGroup;

  submitted!: boolean;

  constructor( 
    private auth: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router) { }

  
    ngOnInit() {
      this.form = this.formBuilder.group({
        name:[''],
        buildingName:[''],
        email: [''],
        birthday:[''],
        gender: [''],
        pass:[''],
        conf_pass: ['']
      });
      }
    
      register(){
        let buildingName = this.form.value.buildingName;
        let name = this.form.value.name;
        let email = this.form.value.email;
        let birthday = this.form.value.birthday;
        let gender = this.form.value.gender;
        let pass = this.form.value.pass;
        let conf_pass = this.form.value.conf_pass;
       
        this.auth.register(buildingName, name, email, birthday, gender, pass, conf_pass).subscribe({
          next: res => {
            console.log(res)
            localStorage.setItem('newAuthData', JSON.stringify(res));
              this.router.navigate(['/login']);
          },
          error: err => {
            console.log('Hiba! A regisztráció sikertelen!')
          }
          
        });
        
      }
}