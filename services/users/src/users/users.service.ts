import { Injectable } from '@nestjs/common';
import { User, UserList } from './interfaces/user.interface';

export const mockUsers: User[] = [
  { id: 1, username: 'johndoe' },
  { id: 2, username: 'admin' },
  { id: 3, username: 'test' },
];

@Injectable()
export class UsersService {
  findOne(id: number): User {
    return mockUsers.find(user => user.id === id);
  }

  findAll(): UserList {
    return { users: mockUsers.slice() };
  }

  addOne(user: User): User {
    const item: User = {
      ...user,
      id: mockUsers.length + 1,
    };
    mockUsers.push(item);
    return item;
  }
}
