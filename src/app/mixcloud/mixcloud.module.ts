import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixcloudRoutingModule } from './mixcloud-routing.module';
import { MixcloudComponent } from './mixcloud.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetUrlPipePipe } from './pipes/widget-url-pipe.pipe';


/**
 * contains components to display shows in a grid, an audio player (Mixcloud widget) and has a detail view as overlay.
 * @module Mixcloud
 */
@NgModule({
  imports: [
    CommonModule,
    MixcloudRoutingModule,
    SharedModule
  ],
  declarations: [
    MixcloudComponent,
    WidgetUrlPipePipe
  ]
})
export class MixcloudModule { }
