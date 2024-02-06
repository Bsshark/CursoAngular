<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Hero } from './../../interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
<<<<<<< HEAD
  styles: ``
})
export class HeroPageComponent {

=======
  styles: ``,
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      return;
    })
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list')
  }
>>>>>>> b72ad81767c0ad272214ce824481058d1b19e6a1
}
