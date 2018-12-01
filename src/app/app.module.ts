import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MixcloudModule } from './mixcloud/mixcloud.module';
import { StartpageComponent } from './startpage/startpage.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHeaderComponent,
    AboutComponent,
    StartpageComponent
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
