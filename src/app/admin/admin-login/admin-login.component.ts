import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  form!: FormGroup;
  title = "Admin-Login";

  constructor( 
    private admin: AdminService, 
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

        this.admin.adminLogin(email, pass)
        .subscribe(res => {
          console.log(res);
        //   console.log(res.data.token);
        //   console.log(res.name);

        // if(res.success) {

        //   localStorage.setItem('currentUser', JSON.stringify({token: res.data.token, name: res.data.name}));

        //   this.router.navigate(['/admin/home']);

        // }
        // else 
        // {
        //   alert('A belépés sikertelen!');
        // }
      })


    }

}