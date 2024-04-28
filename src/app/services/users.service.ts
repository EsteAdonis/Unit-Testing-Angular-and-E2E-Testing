import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: UserInterface[] = [];

  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  };

  removeUser(userId: string): void {
    const updatedUsers = this.users.filter((user) => userId !== user.id);
    this.users = updatedUsers;
  }

}