import { Injectable, inject } from '@angular/core';
import { UserInterface } from './user-interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  utilsService = inject(UtilsService);
  users: UserInterface[] = [];

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  };

  removeUser(userId: string): void {
    const updatedUsers = this.users.filter((user) => userId !== user.id);
    this.users = updatedUsers;
  }

  getUsernames(): string[] {
    return this.utilsService.pluck(this.users, 'name');
  }
}
