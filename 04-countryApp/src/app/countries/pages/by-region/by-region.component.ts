import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent implements OnInit{
  public countries: Country[] = [];

  public regions: Region[] = ["Europe", "America", "Africa", "Oceania", "Asia"]
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {

    this.selectedRegion = region;
    if(region.length < 1) return;
    this.countriesService.searchMany('region', region)
    .subscribe(countries => {
      this.countries = countries;
    })
  }
}
