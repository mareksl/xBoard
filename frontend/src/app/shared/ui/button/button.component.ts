import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  // tslint:disable-next-line: no-output-native
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clicked(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(event);
  }
}
