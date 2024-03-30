import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
  <app-title [title]="this.titleLabel()"/>

  @if(user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name">
      <div>
        <h3>{{ user()!.first_name }} {{user()!.last_name}} </h3>
        <p> {{ user()!.email }} </p>
      </div>
    </section>
  } @else {
    <p>Cargando Información...</p>
  }

  `
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  public titleLabel = computed(() => this.user()?.first_name || "Title label")

  //titleLabel

  //public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  )

  /* constructor() {
    this.route.params.subscribe(params => {
      console.log({params})
    })
  } */
}
