import { Test, TestingModule } from '@nestjs/testing';
import { UsersService, mockUsers } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find user by id', () => {
    const result = service.findOne(1);

    expect(result).toEqual(mockUsers[0]);
  });

  it('should return all users', () => {
    const result = service.findAll();

    expect(result).toEqual({ users: mockUsers });
  });

  it('should add user', () => {
    const user = { id: 4, username: 'Test' };
    const result = service.addOne(user);

    expect(result).toEqual(user);
    expect(mockUsers.length).toBe(4);
    expect(mockUsers[3]).toEqual(user);
  });
});
