import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { UserInterface } from './user-interface';

describe('UsersService Testing', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should add a user', () => {
    const user: UserInterface = { id: '5', name: 'Adonis' };
    service.addUser(user);
    expect(service.users$.getValue()).toContain(user);
  })

  it('Should add a new user', () => {
    const user: UserInterface = { id: '6', name: 'Leticia' };
    service.addUser(user);
    expect(service.users$.getValue()).toContain(user);
    expect(service.users$.getValue()).toEqual([user]);
  });

  it('Should remove the user', () => {
    const user: UserInterface = { id: '6', name: 'Leticia' };
    service.addUser(user);
    service.removeUser('6');
    expect(service.users$.getValue()).toEqual([]);
  });
});
