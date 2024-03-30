import { Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/heavy-loader/heavy-loader-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoaderSlowComponent, TitleComponent],
  templateUrl: './defer-view.component.html',
})
export default class DeferViewComponent {

}
