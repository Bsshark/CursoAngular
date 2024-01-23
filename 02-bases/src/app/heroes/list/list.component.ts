import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero? = "";

  removeLastHero():void {
    if(this.heroNames.length < 1) return;
    this.deletedHero = this.heroNames.pop();
  }

}
