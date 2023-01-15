import { Component } from '@angular/core';
import { AuthService } from './user/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor(private auth: AuthService) {}
 
  logout() {
    let jsonUserData: any = localStorage.getItem('userData');
    let userData = JSON.parse(jsonUserData);
    console.log(userData.email);
    console.log(userData.token);
    this.auth.logout(userData.email, userData.token).subscribe({
      next: res => {
        console.log(res)
      }
    });
  }
}
