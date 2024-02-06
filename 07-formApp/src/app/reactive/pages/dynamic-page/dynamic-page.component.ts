import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  })

  public newFav: FormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  get favGames() {
    return this.myForm.get('favGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength } caracteres.`;
        default:
          return null;
      }
    }
    return '';
  }

  isValidFieldInArray(formArray: FormArray, i: number): boolean | null {
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  onAddFavGame(): void {
    if(this.newFav.invalid) return;
    const newFavGame = this.newFav.value;

    this.favGames.push(this.fb.control(newFavGame, Validators.required));

    this.newFav.reset();
  }

  onDeleteFavGame(i: number): void {
    this.favGames.removeAt(i);
  }

  onSubmit():void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    //this.myForm.setControl('favGames', this.fb.array([]));
    this.favGames.clear();
    this.myForm.reset();
  }
}
