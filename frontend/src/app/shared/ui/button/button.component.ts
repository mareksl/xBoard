import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.clicked.emit(event);
  }
}
