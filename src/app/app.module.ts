import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsComponent } from './user/subjects/subjects.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRoutingModule} from 'src/app/admin/admin-routing.module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminStatisticComponent } from './admin/admin-statistic/admin-statistic.component';
import { AdminStudentsComponent } from './admin/admin-students/admin-students.component';
import { AdminSchoolsComponent } from './admin/admin-schools/admin-schools.component';

import { UserRoutingModule } from './user/user-routing.modul';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { FilesComponent } from './user/files/files.component';
import { UserStatisticComponent } from './user/user-statistic/user-statistic.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,

    AdminComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminStatisticComponent,
    AdminStudentsComponent,
    AdminSchoolsComponent,
    AdminLoginComponent,

    UserComponent,
    UserHomeComponent,
    UserNavbarComponent,
    FilesComponent,
    SubjectsComponent,
    UserStatisticComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    UserRoutingModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
