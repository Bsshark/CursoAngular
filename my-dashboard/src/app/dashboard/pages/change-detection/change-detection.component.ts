import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"/>

    <pre>{{ frameworkasSignals() | json }}  </pre>
    <pre>{{ frameworkAsProperty | json  }}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkasSignals().name}`
  )

  public frameworkasSignals = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  constructor() {
    setTimeout(() => {

      /* this.frameworkAsProperty.name = 'React'; */
      this.frameworkasSignals.update(value => ({...value, name: 'React'}))

      console.log('hecho')
    }, 3000)
  }
}
