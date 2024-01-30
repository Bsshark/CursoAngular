import { Component } from '@angular/core';
import { Color, Hero } from '../../hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';
  public order: 'asc' | 'desc' = 'asc';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.green
    }
  ]

  
  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  toggleSortBy(sortBy: keyof Hero):void {
    this.order === 'asc' ? this.order = 'desc': this.order = 'asc';
    console.log(this.order)
    this.orderBy = sortBy;
  }

}
