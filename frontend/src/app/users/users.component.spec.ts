import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersServiceClient } from '../proto/users/src/users/users.pb';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

const users: any = {
  users: [
    {
      id: 1,
      username: 'johnDoe',
    },
    {
      id: 2,
      username: 'janeSmith',
    },
  ],
};

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let el: DebugElement;
  let usersService: any;

  beforeEach(async(() => {
    const usersServiceSpy = jasmine.createSpyObj('UsersServiceClient', [
      'findAll',
    ]);

    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        {
          provide: UsersServiceClient,
          useValue: usersServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        usersService = TestBed.get(UsersServiceClient);
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all users', () => {
    usersService.findAll.and.returnValue(of(users));
    fixture.detectChanges();

    const messages = el.queryAll(By.css('.users-list__item'));
    expect(messages.length).toBe(2);
  });
});
