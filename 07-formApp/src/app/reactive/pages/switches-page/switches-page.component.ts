import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit{
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [true, Validators.requiredTrue],
  })

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  constructor(private fb: FormBuilder) {}

  public person = {
    gender: 'F',
    wantNotifications: true
  }

  onSave():void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = this.myForm.value;
    console.log(this.myForm.value);
   /*  this.myForm.setControl('gender', 'M');
    this.myForm.setControl('wantNotifications', false);
    this.myForm.setControl('termsAndConditions', false); */
    console.log(newPerson);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
}
