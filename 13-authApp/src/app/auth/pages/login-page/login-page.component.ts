import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['abraham@gmail.com', [Validators.required, Validators.email]],
    password: ['123123', [Validators.required, Validators.minLength(6)]],
  })

  login() {
    const {email, password} = this.myForm.value;

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          swal.fire('Error', message, 'error');
        }
      })
  }

}
