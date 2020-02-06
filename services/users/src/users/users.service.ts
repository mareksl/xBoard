import { Injectable } from '@nestjs/common';
import { User, UserList } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'johndoe' },
    { id: 2, username: 'admin' },
    { id: 3, username: 'test' },
  ];

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  findAll(): UserList {
    return { users: this.users.slice() };
  }

  addOne(user: User): User {
    const item: User = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(item);
    return item;
  }
}
