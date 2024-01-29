import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: 'lazy-image.component.html'
})

export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if(!this.url) throw new Error('Url property is required');
  }



  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;


  onLoad() {
    this.hasLoaded = true;
  }

}
