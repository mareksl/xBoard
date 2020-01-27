import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloById } from './interfaces/hello-by-id.interface';
import { Hello, HelloList } from './interfaces/hello.interface';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @GrpcMethod('HelloService')
  findOne(data: HelloById, metadata: any): Hello {
    const { id } = data;
    return this.helloService.findOne(id);
  }

  @GrpcMethod('HelloService')
  findAll(): HelloList {
    return this.helloService.findAll();
  }

  @GrpcMethod('HelloService')
  addOne(data: Hello, metadata: any): Hello {
    return this.helloService.addOne(data);
  }
}
