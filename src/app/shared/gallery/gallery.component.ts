import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserBlob, Item } from './model/Interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() blob: UserBlob;
  @Output() doAction: EventEmitter<Item> = new EventEmitter<Item>();

  public selectedItem: Item = null;

  constructor() { }

  ngOnInit() {
  }
  
  public onItemClicked(item: Item) {
    this.selectedItem = item;
  }

  /**
   * event handling. closes the detail-overview by de-selecting the active cast
   * @method closeOverlay
   */
  public closeOverlay(): void {
    this.selectedItem = null;
  }


  public triggerAction(item: Item): void {
    this.doAction.emit(item);
  }


  
  /**
   * prevents (re-)adding (null) items
   * @private
   * @method safeAdd
   * @param {Array<any>} collection
   * @param {any} item
   */
  private safeAdd(collection: Array<any>, item: any): void {
    if (!collection || !item) {
      return;
    }

    if (collection.indexOf(item) < 0) {
      collection.push(item);
    }
  }
}
