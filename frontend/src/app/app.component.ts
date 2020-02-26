import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hello, HelloServiceClient } from './proto/hello/src/hello/hello.pb';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  messages$: Observable<Hello[]>;

  constructor(private helloService: HelloServiceClient) {}

  ngOnInit() {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messages$ = this.helloService.findAll(null).pipe(pluck('messages'));
  }
}
