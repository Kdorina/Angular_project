
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FilesComponent } from './files/files.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
{path:'', component:UserComponent, canActivate:[AuthGuard]},

    {path:'user', component:UserComponent,
    children:[{
        path:'Uhome', component:UserHomeComponent,
        canActivate:[AuthGuard],
    }]},

    {path:'user', component:UserComponent,
    children:[{
        path:'subject', component:SubjectsComponent,
        canActivate:[AuthGuard],
    }]},

    {path:'user', component:UserComponent,
    children:[{
        path:'statist', component:UserStatisticComponent,
        canActivate:[AuthGuard]
        }]},

    {path:'user', component:UserComponent,
    children:[{
        path:'file', component:FilesComponent,
        canActivate:[AuthGuard]
    }]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
//   declarations: [MainPageComponent]
})
export class UserRoutingModule { }
