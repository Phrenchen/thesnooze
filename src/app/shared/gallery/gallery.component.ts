import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserBlob, Item } from './model/Interfaces';

/**
 * @class GalleryComponent
 */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() items: Array<Item>;
  @Input() overlayEnabled = false;
  // @Input() displayMode: GalleryItemDisplayMode;

  @Output() doOverlayAction: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() doThumbnailAction: EventEmitter<Item> = new EventEmitter<Item>();

  public selectedItem: Item = null;


  constructor() { }

  ngOnInit() {
    if (this.items) {
      console.log(this.items.length);
    }
  }

  public get showOverlay(): boolean {
    return this.selectedItem && this.overlayEnabled;
    // return this.selectedItem && this.showMode(GalleryItemDisplayMode.OVERLAY);
  }

  // private showMode(displayMode: GalleryItemDisplayMode): boolean {
    // return this.displayMode === displayMode;
  // }

  public onItemClicked(item: Item) {
    this.selectedItem = item;
    this.doThumbnailAction.emit(item);
  }

  


  // public triggerAction(item: Item): void {
    // this.doAction.emit(item);
  // }



}
