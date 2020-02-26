import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { DetailComponent } from "./detail/detail.component";

export const routes: Routes = [
  { path: "", component: HelloComponent },
  { path: "detail", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModule {}
