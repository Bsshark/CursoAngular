import { Hero } from './../../interfaces/hero.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{

  ngOnInit(): void {
      if(!this.hero) throw Error('Hero property is required');
  }

  @Input()
  public hero!: Hero
}
