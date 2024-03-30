import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: `
  <app-title title="View Transition 2"/>
  <section class="flex justify-end">
    <img srcset="https://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300" style="view-transition-name: hero-1;">
    <div class="bg-blue-800 w-32 h-32 rounded bottom-16 right-10 fixed" style="view-transition-name: hero-2;"></div>
  </section>
  `
})
export default class ViewTransitionComponent {

}
