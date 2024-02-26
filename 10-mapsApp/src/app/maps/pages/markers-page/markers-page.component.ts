import { Component, ElementRef, ViewChild } from '@angular/core';

import { Map , LngLat, Marker} from 'mapbox-gl'


interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];

}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {
  @ViewChild('map')
  public divMap?: ElementRef;

  public currentZoom: number = 12;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-3.72, 40.41);
  public markers: MarkerAndColor[] = [];


  ngAfterViewInit(): void {

    if(!this.divMap) return;

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiYnNzaGFyayIsImEiOiJjbHQwOXY1OHkwczMwMm1saWJqazBpMnd3In0.cZn-STtMhZXZFy95W5VCfA',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    this.readFromLocalStorage();

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Abraham'

    /* const marker = new Marker({
     color: 'red',
      element: markerHtml
    }).setLngLat(this.currentCenter).addTo(this.map); */


  }

  createMarker() {
    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color)
  }

  addMarker(lngLat: LngLat, color: string = 'blue') {
    if(!this.map) return;

    const marker = new Marker({
      color,
      draggable: true
    }).setLngLat(lngLat)
    .addTo(this.map);

    marker.on('dragend', () => {
      this.saveToLocalStorage()
    })

    this.markers.push({
      color,
      marker
    });
    this.saveToLocalStorage();
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 12,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(
      ({color, lngLat}) => {
        const [lng, lat] = lngLat;
        const coords = new LngLat(lng, lat);
        this.addMarker(coords,color);
      })
  }
}
