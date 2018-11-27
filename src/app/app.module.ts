import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MixcloudModule } from './mixcloud/mixcloud.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MixcloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
