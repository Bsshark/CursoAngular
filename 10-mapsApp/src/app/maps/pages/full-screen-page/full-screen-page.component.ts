import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;


  ngAfterViewInit(): void {

    if(!this.divMap) return;

    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiYnNzaGFyayIsImEiOiJjbHQwOXY1OHkwczMwMm1saWJqazBpMnd3In0.cZn-STtMhZXZFy95W5VCfA',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
