import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Abraham';
  public gender: 'male' | 'female' = 'male';

  public client1 = {name: 'Abraham', gender: 'male'};
  public client2 = {name: 'Melissa', gender: 'female'};

  public activeClient = this.client1;

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  toggleClient(): void {
    this.activeClient = this.activeClient === this.client1 ? this.client2 : this.client1;
  }

  public clients: string[] = ['Maria', 'Pedro', 'Abraham', 'Carlos'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'Tenemos 1 cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  public person = {
    name: 'Abraham',
    age: 29,
    address: 'Canarias'
  }

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos promesa resuelta')
    }, 3500);
  })
}
