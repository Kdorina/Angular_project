import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor(private auth: AuthService) {}
 
  logout() {
   this.auth.logout();
   console.log('Kilépés');
  }
  successLogout(){
    console.log('Sikeres kijelentkezés')
  }
}
