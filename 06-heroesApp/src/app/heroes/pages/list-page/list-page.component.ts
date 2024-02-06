<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
<<<<<<< HEAD
export class ListPageComponent {

=======
export class ListPageComponent implements OnInit{

  ngOnInit(): void {
      this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      })
  }
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {

  }
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
}
