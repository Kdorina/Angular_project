
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "home", component:HomeComponent},
  {path: "about", component: AboutComponent},

  // {path: "", redirectTo:"main-page", pathMatch: "full"},
  // {path: "main-page", component: MainPageComponent},
  // {path: "subject", component: SubjectsComponent},
  // {path: "user-statistic", component: UserStatisticComponent},
  // {path: "files", component: FilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
