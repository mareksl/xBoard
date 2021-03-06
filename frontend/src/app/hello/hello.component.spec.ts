import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloComponent } from './hello.component';
import { HelloServiceClient } from './../proto/hello/src/hello/hello.pb';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

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

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let el: DebugElement;
  let helloService: any;

  beforeEach(async(() => {
    const helloServiceSpy = jasmine.createSpyObj('HelloServiceClient', [
      'findAll',
    ]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HelloComponent],
      providers: [
        {
          provide: HelloServiceClient,
          useValue: helloServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HelloComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        helloService = TestBed.get(HelloServiceClient);
      });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all hello messages', () => {
    helloService.findAll.and.returnValue(of(helloMessages));
    fixture.detectChanges();

    const messages = el.queryAll(By.css('.messages-list__item'));
    expect(messages.length).toBe(2);
  });
});
