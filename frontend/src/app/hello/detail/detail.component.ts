import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from "rxjs/operators";
import { Hello, HelloServiceClient } from 'src/app/proto/hello/src/hello/hello.pb';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  messages$: Observable<Hello>;

  constructor(private helloService: HelloServiceClient) { }

  ngOnInit() {
    this.fetchMessage();
  }

  fetchMessage() {
    this.messages$ = this.helloService.findOne(null).pipe();
  }
}
