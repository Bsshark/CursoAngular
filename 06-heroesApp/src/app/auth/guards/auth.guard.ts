import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
export const canActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthStatus()
  .pipe(
    tap(isAuthenticated => {
      if(!isAuthenticated) {
        router.navigateByUrl('/auth/login')
      }
    })
  )
};

export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthStatus()
  .pipe(
    tap(isAuthenticated => {
      if(!isAuthenticated) {
        router.navigateByUrl('/auth/login')
      }
    })
  )
};
