import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clicked on button click', fakeAsync(() => {
    const button = el.query(By.css('button'));
    const event = new MouseEvent('click');
    spyOn(component, 'clicked');

    button.triggerEventHandler('click', event);
    tick();

    expect(component.clicked).toHaveBeenCalledWith(event);
  }));

  it('should emit click event', () => {
    spyOn(component.click, 'emit');
    const event = new MouseEvent('click');

    component.clicked(event);

    expect(component.click.emit).toHaveBeenCalledWith(event);
  });
});
