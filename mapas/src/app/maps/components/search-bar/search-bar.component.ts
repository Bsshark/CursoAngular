import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(
    private placesService: PlacesService
  ) {}

  private debounceTimer?: NodeJS.Timeout;

  onQueryChanged(value:string = ''):void {
    if(this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(value);
    }, 500);
  }
}
