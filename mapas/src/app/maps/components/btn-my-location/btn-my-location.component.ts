import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) {}

  goToMyLocation():void {
    if(!this.placesService.isUserLocationReady) throw Error('Sin ubicacion');
    if(!this.mapService.isMapReady) throw Error('Sin ubicacion');
    this.mapService.flyTo(this.placesService.userLocation!)

  }
}
