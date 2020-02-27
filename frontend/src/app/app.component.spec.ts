import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HelloServiceClient } from './proto/hello/src/hello/hello.pb';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { UsersServiceClient } from './proto/users/src/users/users.pb';

const helloMessages: any = {
  messages: [
    {
      id: 1,
      message: 'Lorem Ipsum',
    },
    {
      id: 2,
      message: 'Hello World',
    },
  ],
};

const users: any = {
  users: [
    {
      id: 1,
      username: 'JohnDoe',
    },
    {
      id: 2,
      username: 'AdamSmith',
    },
  ],
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;
  let helloService: any;
  let usersService: any;

  beforeEach(async(() => {
    const helloServiceSpy = jasmine.createSpyObj('HelloServiceClient', [
      'findAll',
    ]);
    const usersServiceSpy = jasmine.createSpyObj('UsersServiceClient', [
      'findAll',
    ]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: HelloServiceClient,
          useValue: helloServiceSpy,
        },
        {
          provide: UsersServiceClient,
          useValue: usersServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        helloService = TestBed.get(HelloServiceClient);
        usersService = TestBed.get(UsersServiceClient);

        helloService.findAll.and.returnValue(of(helloMessages));
        usersService.findAll.and.returnValue(of(users));
        fixture.detectChanges();
      });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all hello messages', () => {
    const messages = el.queryAll(By.css('.messages-list__item'));
    expect(messages.length).toBe(2);
  });

  it('should display all users', () => {
    const users = el.queryAll(By.css('.users-list__item'));
    expect(users.length).toBe(2);
  });
});
