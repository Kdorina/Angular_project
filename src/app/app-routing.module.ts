
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "user/login", component:LoginComponent},
  {path: "user/register", component:RegisterComponent},

  {path:"admin/login", component:AdminLoginComponent,},

  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "about", component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
