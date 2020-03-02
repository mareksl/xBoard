import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById } from './interfaces/user-by-id.interface';
import { User, UserList } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersService')
  findOne(data: UserById, metadata?: any): User {
    const { id } = data;
    return this.usersService.findOne(id);
  }

  @GrpcMethod('UsersService')
  findAll(): UserList {
    return this.usersService.findAll();
  }

  @GrpcMethod('UsersService')
  addOne(data: User, metadata?: any): User {
    return this.usersService.addOne(data);
  }
}
