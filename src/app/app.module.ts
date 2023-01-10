import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsComponent } from './subjects/subjects.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { AdminRoutingModule} from 'src/app/admin/admin-routing.module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminStatisticComponent } from './admin/admin-statistic/admin-statistic.component';
import { AdminStudentsComponent } from './admin/admin-students/admin-students.component';
import { AdminSchoolsComponent } from './admin/admin-schools/admin-schools.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FilesComponent } from './files/files.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubjectsComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminStatisticComponent,
    AdminStudentsComponent,
    AdminSchoolsComponent,
    MainPageComponent,
    FilesComponent,
    UserStatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
