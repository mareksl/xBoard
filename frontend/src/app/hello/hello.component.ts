import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Hello, HelloServiceClient } from '../proto/hello/src/hello/hello.pb';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  messages$: Observable<Hello[]>;

  constructor(private helloService: HelloServiceClient) {}

  ngOnInit() {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messages$ = this.helloService.findAll(null).pipe(pluck('messages'));
  }
}
