import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  onDeleteChracter(index: number):void {
    this.onDeleteId.emit(index);
  }
}
