import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '', sortOrder: 'asc'| 'desc' = 'desc'): Hero[] {
   switch(sortBy) {
    case 'name':
      if(sortOrder === 'asc') return heroes.sort((a, b) => (a.name < b.name) ? 1 : -1);
      return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    case 'canFly':
      if(sortOrder === 'asc') return heroes.sort((a, b) => (a.canFly < b.canFly) ? 1 : -1);
      return heroes.sort((a, b) => (a.canFly > b.canFly) ? 1 : - 1);
    case 'color':
      if(sortOrder === 'asc') return heroes.sort((a, b) => (a.color < b.color) ? 1 : -1);
      return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
    default:
      return heroes;
   }
  }

}
