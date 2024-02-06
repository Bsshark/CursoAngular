<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Hero } from './../../interfaces/hero.interface';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
<<<<<<< HEAD
  styles: ``
})
export class SearchPageComponent {

=======
  styles: ``,
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  searchHero(): void {
    const value: string = this.searchInput.value || '';
    this.heroService.getSuggestions(value)
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent):void {
    if(!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
}
