import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as CustomValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.firstNameAndLastnamePattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
      //[new EmailValidatorService()],
      [this.emailValidatorService],
    ],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ) {}

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
