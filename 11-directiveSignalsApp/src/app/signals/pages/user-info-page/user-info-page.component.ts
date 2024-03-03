import { Component, inject, signal, OnInit } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{

  private usersService = inject(UsersServiceService);

  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if(id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById(id)
    .subscribe(user => {
      this.currentUser.set(user);
    })


  }

}
