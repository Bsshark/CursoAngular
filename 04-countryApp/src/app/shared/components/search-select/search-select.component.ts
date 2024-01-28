import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../../countries/interfaces/region.type';

@Component({
  selector: 'shared-search-select',
  templateUrl: './search-select.component.html'
})
export class SearchSelectComponent {

  @Input()
  public regions: Region[] = [];

  @Output()
  public onValue: EventEmitter<Region> = new EventEmitter();

  @Input()
  public selectedRegion?: Region;

  emitSearch(selected: Region): void {
    this.onValue.emit(selected);
  }

}
