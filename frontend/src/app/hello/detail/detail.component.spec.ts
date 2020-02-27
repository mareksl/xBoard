import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloServiceClient } from './../../proto/hello/src/hello/hello.pb';
import { of } from 'rxjs';

import { DetailComponent } from './detail.component';

const message: any = {
  id: 1,
  message: 'Lorem Ipsum',
};

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let helloService: any;

  beforeEach(async(() => {
    const helloServiceSpy = jasmine.createSpyObj('HelloServiceClient', [
      'findOne',
    ]);

    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        {
          provide: HelloServiceClient,
          useValue: helloServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        helloService = TestBed.get(HelloServiceClient);
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
