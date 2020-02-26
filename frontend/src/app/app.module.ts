import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GRPC_HELLO_SERVICE_CLIENT_SETTINGS } from './proto/hello/src/hello/hello.pbconf';
import { environment } from '../environments/environment';
import { GRPC_INTERCEPTORS } from '@ngx-grpc/core';
import { GrpcWebDevtoolsInterceptor } from './grpc-web-devtools.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcWebDevtoolsInterceptor,
      multi: true
    },
    {
      provide: GRPC_HELLO_SERVICE_CLIENT_SETTINGS,
      useValue: { host: environment.host }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
