import { Injectable } from '@nestjs/common';
import { Hello, HelloList } from './interfaces/hello.interface';

export const mockMessages: Hello[] = [
  { id: 1, message: 'Hello World' },
  { id: 2, message: 'Hello Poland' },
  { id: 3, message: 'Hello STX' },
];

@Injectable()
export class HelloService {
  findOne(id: number): Hello {
    return mockMessages.find(hello => hello.id === id);
  }

  findAll(): HelloList {
    return { messages: mockMessages.slice() };
  }

  addOne(hello: Hello): Hello {
    const item: Hello = {
      ...hello,
      id: mockMessages.length + 1,
    };
    mockMessages.push(item);
    return item;
  }
}
