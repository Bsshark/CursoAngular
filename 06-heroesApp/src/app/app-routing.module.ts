import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

<<<<<<< HEAD
=======
import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';
import { canActivatePublicGuard, canMatchPublicGuard } from './auth/guards/public.guard';

>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
<<<<<<< HEAD
=======
    canActivate: [canActivatePublicGuard],
    canMatch: [canMatchPublicGuard]
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
<<<<<<< HEAD
  },
  {
    path: '404',
    component: Error404PageComponent
=======
    canActivate: [canActivateGuard], //Anclamos la función del canActive
    canMatch: [canMatchGuard], //Anclamos la función del canMatch
  },
  {
    path: '404',
    component: Error404PageComponent,
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
  },
  {
    path: '',
    redirectTo: 'heroes',
<<<<<<< HEAD
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
=======
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
