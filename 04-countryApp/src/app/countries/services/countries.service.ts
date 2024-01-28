import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion: { region: '', countries: []}
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  searchMany(by:string, term:string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${by}/${term}`)
    .pipe(
      catchError(() => of([])),
      tap(countries => this.assignStore(by, term, countries)),
      tap(() => this.saveToLocalStorage()),
    )
  }

  searchOne(by:string, query:string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/${by}/${query}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    )
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  assignStore(by:string, term: string, countries: Country[]) {
    switch(by) {
      case 'capital':
        this.cacheStore.byCapital = {term, countries}
        return;
      case 'name':
        this.cacheStore.byCountry = {term, countries}
        return;
      case 'region':
        this.cacheStore.byRegion = {region: term as Region, countries}
        return;
      default:
        return;
    }
  }

}
