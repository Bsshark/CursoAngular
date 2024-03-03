import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color:string = 'red';
  private _errors: ValidationErrors | null | undefined;


  @Input()
  set color(value:string){
    this._color = value;
    this.setStyle()
  }

  @Input()
  set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }
  ngOnInit(): void {
    console.log('directiva on init')
    this.setStyle();
  }

  setStyle():void {
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = 'red';
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if(errors.includes('minlength')) {
      const lengthData = this._errors['minlength'];
      this.htmlElement.nativeElement.innerText =  `Este campo requiere ${lengthData.requiredLength} caracteres. Solo has puesto ${lengthData.actualLength}` ;
      return;
    }
    if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Introduce un email válido';
      return;
    }


  }

}
