import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat])
  }

  getDirections(place: Feature):void {
    if(!this.placesService.userLocation) throw Error('No hay userLocation');

    this.placesService.hidePlaces();
    const start = this.placesService.userLocation!;
    const end = place.center as [number, number];
    this.mapService.getRoutesBetweenPoints(start, end)
  }
}
