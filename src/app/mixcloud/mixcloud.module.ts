import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixcloudRoutingModule } from './mixcloud-routing.module';
import { MixcloudComponent } from './mixcloud.component';
import { MixcloudOverlayComponent } from './mixcloud-overlay/mixcloud-overlay.component';
import { SafePipe } from '../app.component';

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
