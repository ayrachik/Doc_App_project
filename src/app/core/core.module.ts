import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { DefaultInterceptor } from './interceptors/default.interceptor';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    IonicModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    },
  ],

})
export class CoreModule { }
