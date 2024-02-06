import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
<<<<<<< HEAD
  styles: ``
})
export class LoginPageComponent {

=======
  styles: ``,
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService
      .login('abrahamlega@gmail.com', '123123')
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
  }
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
}
