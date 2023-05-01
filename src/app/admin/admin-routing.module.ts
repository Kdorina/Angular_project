import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";

import { AdminSchoolsComponent } from "./admin-schools/admin-schools.component";

import { AdminStudentsComponent } from "./admin-students/admin-students.component";
import { AdminComponent } from "./admin.component";
import { AdminGuard } from "./service/admin.guard";

const routes: Routes = [

    {path: "admin", component: AdminHomeComponent,  canActivate:[AdminGuard]},

    {path: "admin", component: AdminComponent,
  children: [{
      path:'home', component: AdminHomeComponent,
      canActivate:[AdminGuard]
  }]},

    {path: "admin", component: AdminComponent,
    children: [{
      path:"students", component: AdminStudentsComponent,
      canActivate:[AdminGuard]
  }]},

    {path: "admin", component: AdminComponent,
    children: [{
      path:"schools", component: AdminSchoolsComponent,
      canActivate:[AdminGuard]
  }]},

]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
