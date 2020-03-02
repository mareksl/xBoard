import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HelloRoutingModule } from './hello-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [HelloComponent, DetailComponent],
  imports: [HelloRoutingModule, CommonModule]
})
export class HelloModule {}
