import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MixcloudModule } from './mixcloud/mixcloud.module';
import { StartpageComponent } from './startpage/startpage.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { SharedModule } from './shared/shared.module';
import { ArtItemDetailsComponent } from './art/item-details/art-item-details.component';

/**
 * AppModule description
 */
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHeaderComponent,
    AboutComponent,
    StartpageComponent,
    ArtComponent,
    ArtItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MixcloudModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
