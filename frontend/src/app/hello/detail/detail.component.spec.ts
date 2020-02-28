import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HelloServiceClient } from './../../proto/hello/src/hello/hello.pb';

import { DetailComponent } from './detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let helloService: any;
  let el: DebugElement;

  beforeEach(async(() => {
    const helloServiceSpy = jasmine.createSpyObj('HelloServiceClient', [
      'findOne',
    ]);

    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [
      'paramMap',
    ]);

    activatedRouteSpy.paramMap = {
      subscribe: jasmine.createSpy().and.callFake(callback => {
        const paramsSpy = jasmine.createSpyObj('params', ['get']);
        paramsSpy.get = jasmine.createSpy().and.returnValue('1');
        callback(paramsSpy);
      }),
    };

    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        {
          provide: HelloServiceClient,
          useValue: helloServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        helloService = TestBed.get(HelloServiceClient);
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows details', () => {
    helloService.findOne.and.returnValue({
      toPromise: jasmine.createSpy().and.callFake(callback => {
        return {
          then: jasmine.createSpy().and.callFake(callback => {
            callback({
              id: '1',
              message: 'message',
            });
          }),
        };
      }),
    });

    fixture.detectChanges();
    const detailId = el.query(By.css('.detail .detail__id'));
    const detailMessage = el.query(By.css('.detail .detail__message'));

    expect(detailId.nativeNode.innerHTML).toBe('ID: 1');
    expect(detailMessage.nativeNode.innerHTML).toBe('MESSAGE: message');
  })
});
