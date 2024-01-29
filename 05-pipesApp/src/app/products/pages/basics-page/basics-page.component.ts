import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'abraham';
  public nameUpper: string = 'ABRAHAM';
  public fullName: string = 'AbrAHaM';

  public customDate: Date = new Date();
}
