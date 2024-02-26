import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import {Map, Marker} from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @Input()
  lngLat?: [number, number];

  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;
  public currentZoom:number = 12;

  ngAfterViewInit(): void {
    if(!this.lngLat) throw "LngLat can't be null";
    if(!this.divMap?.nativeElement) throw "Map Div not found";

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiYnNzaGFyayIsImEiOiJjbHQwOXY1OHkwczMwMm1saWJqazBpMnd3In0.cZn-STtMhZXZFy95W5VCfA',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
      interactive: false
    })

    new Marker({
      color,
      draggable: false
    }).setLngLat(this.lngLat)
    .addTo(this.map);
  }
}
