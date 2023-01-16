import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private admin: AdminService, private router: Router){}

  canActivate(){
      if(this.admin.isLoggedIn() ){
        return true;
      }
      this.router.navigate(['admin/login']);
      return false;
  }
}
