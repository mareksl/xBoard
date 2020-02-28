import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  { path: "hello", component: HelloComponent },
  { path: "hello/:id", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule {}
