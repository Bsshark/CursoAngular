import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
<<<<<<< HEAD
=======
import { MaterialModule } from '../material/material.module';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AuthRoutingModule
=======
    AuthRoutingModule,
    MaterialModule
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
  ]
})
export class AuthModule { }
