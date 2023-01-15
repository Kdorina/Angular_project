import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminSchoolsComponent } from "./admin-schools/admin-schools.component";
import { AdminStatisticComponent } from "./admin-statistic/admin-statistic.component";
import { AdminStudentsComponent } from "./admin-students/admin-students.component";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {path: "", component: AdminComponent,
  children: [{
      path:"admin-login", component:AdminLoginComponent
  }]},

    {path: "admin", component: AdminComponent,
  children: [{
      path:'admin-home', component: AdminHomeComponent
  }]},

    {path: "admin", component: AdminComponent,
    children: [{ 
      path:"students", component: AdminStudentsComponent
  }]},

    {path: "admin", component: AdminComponent,
    children: [{ 
      path:"schools", component: AdminSchoolsComponent
  }]},
  
    {path: "admin", component: AdminComponent,
    children: [{ 
      path:"statistic", component: AdminStatisticComponent
  }]},
]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  