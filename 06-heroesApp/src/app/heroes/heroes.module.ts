import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
<<<<<<< HEAD
=======
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/HeroImage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    NewPageComponent,
    SearchPageComponent,
<<<<<<< HEAD
    ListPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
=======
    ListPageComponent,
    CardComponent,
    HeroImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
  ]
})
export class HeroesModule { }
