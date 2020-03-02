import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, CommonModule],
})
export class UsersModule {}
