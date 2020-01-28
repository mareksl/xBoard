import { Test, TestingModule } from '@nestjs/testing';
import { HelloService, mockMessages } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloService],
    }).compile();

    service = module.get<HelloService>(HelloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find message by id', () => {
    const result = service.findOne(1);

    expect(result).toEqual(mockMessages[0]);
  });

  it('should return all messages', () => {
    const result = service.findAll();

    expect(result).toEqual({ messages: mockMessages });
  });

  it('should add message', () => {
    const message = { id: 4, message: 'Test' };
    const result = service.addOne(message);

    expect(result).toEqual(message);
    expect(mockMessages.length).toBe(4);
    expect(mockMessages[3]).toEqual(message);
  });
});
