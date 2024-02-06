import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
<<<<<<< HEAD
=======
  public sidebarItems = [
    {
      label: 'Listado', icon: 'label', url: './list'
    },
    {
      label: 'Añadir', icon: 'add', url: './new-hero'
    },
    {
      label: 'Buscar', icon: 'search', url: './search'
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  get user():User | undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1

}
