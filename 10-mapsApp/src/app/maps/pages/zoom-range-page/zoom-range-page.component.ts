import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map')
  public divMap?: ElementRef;

  public currentZoom: number = 12;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-3.72, 40.41);


  ngAfterViewInit(): void {

    if(!this.divMap) return;

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiYnNzaGFyayIsImEiOiJjbHQwOXY1OHkwczMwMm1saWJqazBpMnd3In0.cZn-STtMhZXZFy95W5VCfA',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }



  mapListeners() {
    if(!this.map) throw 'Mapa no inicializado'

    this.map.on('zoom', (ev) => {
      this.currentZoom = this.map!.getZoom();
    })

    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 16) return;
      this.map!.zoomTo(16);
    })

    this.map.on('move', () => {
      this.currentCenter = this.map!.getCenter();
    })
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.currentZoom = Number(value);
    this.map?.zoomTo(this.currentZoom);
  }

}
