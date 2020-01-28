import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { Hello, HelloList } from './interfaces/hello.interface';

describe('Hello Controller', () => {
  let controller: HelloController;
  let helloService: HelloService;

  beforeEach(async () => {
    const helloServiceMock = {
      findOne: jest.fn(),
      findAll: jest.fn(),
      addOne: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [
        {
          provide: HelloService,
          useValue: helloServiceMock,
        },
      ],
    }).compile();

    controller = module.get<HelloController>(HelloController);
    helloService = module.get<HelloService>(HelloService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find message by id', () => {
    const message: Hello = { id: 1, message: 'test' };
    const spy = jest.spyOn(helloService, 'findOne').mockReturnValue(message);

    const result = controller.findOne({ id: 1 });
    expect(spy).toBeCalledWith(1);
    expect(result).toEqual(message);
  });

  it('should find all messages', () => {
    const messages: HelloList = {
      messages: [
        { id: 1, message: 'test' },
        { id: 2, message: 'test1' },
      ],
    };
    const spy = jest.spyOn(helloService, 'findAll').mockReturnValue(messages);

    const result = controller.findAll();
    expect(spy).toBeCalled();
    expect(result).toEqual(messages);
  });

  it('should add message', () => {
    const message: Hello = { id: 1, message: 'test' };
    const spy = jest.spyOn(helloService, 'addOne').mockReturnValue(message);

    const result = controller.addOne(message);
    expect(spy).toBeCalledWith(message);
    expect(result).toEqual(message);
  });
});
