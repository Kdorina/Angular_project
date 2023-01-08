import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminSchoolsComponent } from "./admin-schools/admin-schools.component";
import { AdminStatisticComponent } from "./admin-statistic/admin-statistic.component";
import { AdminStudentsComponent } from "./admin-students/admin-students.component";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    {path: "admin", component: AdminComponent,
  children: [{
    path:'', component: AdminHomeComponent
  }]},
    {path: "", component: AdminComponent,
    children: [{ path:"students", component: AdminStudentsComponent
  }]},
    {path: "", component: AdminComponent,
    children: [{ path:"shools", component: AdminSchoolsComponent
  }]},
    {path: "", component: AdminComponent,
    children: [{ path:"statistic", component: AdminStatisticComponent
  }]},
]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  