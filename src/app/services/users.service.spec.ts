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
    const countUsers = service.users.length;
    service.addUser(user);
    expect(service.users.length).toBeGreaterThan(countUsers);
  })

  it('Should add a new user', () => {
    const user: UserInterface = { id: '6', name: 'Leticia' };
    service.addUser(user);
    expect(service.users).toContain(user);
    expect(service.users).toEqual([user]);
  });

  it('Should remove the user', () => {
    const user: UserInterface = { id: '6', name: 'Leticia' };
    service.addUser(user);
    service.removeUser('6');
    expect(service.users).toEqual([]);
  })
});
