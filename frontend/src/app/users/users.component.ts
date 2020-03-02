import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersServiceClient } from '../proto/users/src/users/users.pb';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UsersServiceClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.users$ = this.usersService.findAll(null).pipe(pluck('users'));
  }
}
