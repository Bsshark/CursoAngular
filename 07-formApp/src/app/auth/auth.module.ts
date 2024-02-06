import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
<<<<<<< Updated upstream


@NgModule({
  declarations: [],
=======
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
>>>>>>> Stashed changes
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
