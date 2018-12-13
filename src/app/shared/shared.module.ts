import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/pipes.pipe';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    SafePipe,
    GalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    GalleryComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
