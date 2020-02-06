import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Hello, HelloServiceClient } from "./proto/hello/src/hello/hello.pb";
import { pluck } from "rxjs/operators";
import { UsersServiceClient, User } from "./proto/users/src/users/users.pb";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  messages$: Observable<Hello[]>;
  users$: Observable<User[]>;

  constructor(
    private helloService: HelloServiceClient,
    private usersService: UsersServiceClient
  ) {}

  ngOnInit() {
    this.fetchMessages();
    this.fetchUsers();
  }

  fetchMessages() {
    this.messages$ = this.helloService.findAll(null).pipe(pluck("messages"));
  }
  fetchUsers() {
    this.users$ = this.usersService.findAll(null).pipe(pluck("users"));
  }
}
