
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FilesComponent } from './files/files.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [

    {path:'user', component:UserComponent,
    children:[{
        path:'main-home', component:MainPageComponent,
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
