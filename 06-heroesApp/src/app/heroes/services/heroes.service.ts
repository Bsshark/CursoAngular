import { Hero } from './../interfaces/hero.interface';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class HeroService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    console.log(id);
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }
}
