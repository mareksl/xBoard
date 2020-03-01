import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hello',
    loadChildren: './hello/hello.module#HelloModule',
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  },
  { path: '', children: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
