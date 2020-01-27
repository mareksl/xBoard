import { Injectable } from '@nestjs/common';
import { Hello, HelloList } from './interfaces/hello.interface';

@Injectable()
export class HelloService {
  private messages: Hello[] = [
    { id: 1, message: 'Hello World' },
    { id: 2, message: 'Hello Poland' },
    { id: 3, message: 'Hello STX' },
  ];

  findOne(id: number): Hello {
    return this.messages.find(hello => hello.id === id);
  }

  findAll(): HelloList {
    return { messages: this.messages.slice() };
  }

  addOne(hello: Hello): Hello {
    const item: Hello = {
      ...hello,
      id: this.messages.length + 1,
    };
    this.messages.push(item);
    return item;
  }
}
