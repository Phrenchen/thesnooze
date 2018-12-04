import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixcloudRoutingModule } from './mixcloud-routing.module';
import { MixcloudComponent } from './mixcloud.component';
import { MixcloudOverlayComponent } from './mixcloud-overlay/mixcloud-overlay.component';
import { SafePipe } from '../app.component';

/**
 * contains components to display shows in a grid, an audio player (Mixcloud widget) and has a detail view as overlay.
 * 
 * @module Mixcloud
 */
@NgModule({
  imports: [
    CommonModule,
    MixcloudRoutingModule
  ],
  declarations: [
    MixcloudComponent,
    MixcloudOverlayComponent,
    SafePipe
  ]
})
export class MixcloudModule { }
