import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
=======
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
>>>>>>> Stashed changes



@NgModule({
<<<<<<< Updated upstream
  declarations: [],
  imports: [
    CommonModule
=======
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent
>>>>>>> Stashed changes
  ]
})
export class SharedModule { }
