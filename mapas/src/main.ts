import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'

Mapboxgl.accessToken = 'pk.eyJ1IjoiYnNzaGFyayIsImEiOiJjbHQwOXY1OHkwczMwMm1saWJqazBpMnd3In0.cZn-STtMhZXZFy95W5VCfA';

if(!navigator.geolocation) {
  alert('El navegador no soporta geolocalización');
  throw new Error('');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
