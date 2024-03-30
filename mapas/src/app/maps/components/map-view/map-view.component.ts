import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements  AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement?: ElementRef;

  constructor(private placesService: PlacesService, private mapService: MapService) {}
  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElement?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesService.userLocation,
      zoom: 15
    });

    this.mapService.setMap(map);

    const popup = new Popup()
      .setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({color: 'red'})
      .setLngLat(this.placesService.userLocation!)
      .setPopup(popup)
      .addTo(map);


  }

}
