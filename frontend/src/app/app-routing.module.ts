import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { routes as helloRoutes } from "./hello/routes";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "hello",
    children: [
      ...helloRoutes,
    ]
  },
  { path: "*", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
