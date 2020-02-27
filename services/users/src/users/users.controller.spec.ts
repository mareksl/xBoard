import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserList } from './interfaces/user.interface';

describe('Users Controller', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const usersServiceMock = {
      findOne: jest.fn(),
      findAll: jest.fn(),
      addOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceMock,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find user by id', () => {
    const user: User = { id: 1, username: 'test' };
    const spy = jest.spyOn(usersService, 'findOne').mockReturnValue(user);

    const result = controller.findOne({ id: 1 });
    expect(spy).toBeCalledWith(1);
    expect(result).toEqual(user);
  });

  it('should find all users', () => {
    const users: UserList = {
      users: [
        { id: 1, username: 'test' },
        { id: 2, username: 'test1' },
      ],
    };
    const spy = jest.spyOn(usersService, 'findAll').mockReturnValue(users);

    const result = controller.findAll();
    expect(spy).toBeCalled();
    expect(result).toEqual(users);
  });

  it('should add user', () => {
    const user: User = { id: 1, username: 'test' };
    const spy = jest.spyOn(usersService, 'addOne').mockReturnValue(user);

    const result = controller.addOne(user);
    expect(spy).toBeCalledWith(user);
    expect(result).toEqual(user);
  });
});
