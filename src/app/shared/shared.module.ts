import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/pipes.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryOverlayComponent } from './gallery/gallery-overlay/gallery-overlay.component';

@NgModule({
  declarations: [SafePipe, GalleryComponent, GalleryOverlayComponent],
  imports: [
    CommonModule
  ],
  exports: [SafePipe, GalleryComponent]
})
export class SharedModule { }
