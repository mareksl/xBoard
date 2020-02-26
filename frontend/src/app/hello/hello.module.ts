import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./hello.component";
import { RouteModule } from "./routes";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [HelloComponent, DetailComponent],
  imports: [RouteModule, CommonModule]
})
export class HelloModule {}
