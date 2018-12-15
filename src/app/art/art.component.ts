import { Component, OnInit } from '@angular/core';
import { ArtService } from './art.service';
import { ArtItem } from './model/Interfaces';
import { UserBlob, Item } from '../shared/gallery/model/Interfaces';
import { CollectionUtils } from '../shared/CollectionUtils';
import { MixcloudService } from '../mixcloud/mixcloud.service';

/**
 * controller in charge of managing ArtItems
 * @module Art
 * @class ArtComponent
 */
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  public selectedItem: ArtItem = null;

  public centerImageUrl = './assets/images/vancouver-police-department-charity-dog-calendar-2019-coverimage.jpg';

  public artBlob: UserBlob;

  public galleryItemsLeft: Array<Item>;
  public galleryItemsRight: Array<Item>;

  /**
   * @method constructor
   * @description injects ArtService
   * @param artService
   * @type ArtService
   */
  constructor(private artService: ArtService,
    private mixcloudService: MixcloudService) { }

  /**
   * @method ngOnInit
   * @description Angular lifecycle method
   */
  ngOnInit() {
    // this.artBlob = {
    // data: this.artService.getArtItems()
    // };

    this.initServices();
  }

  private async initServices() {
    this.artBlob = await this.mixcloudService.getCloudcasts();
    console.log(this.artBlob);

    // pre-select item -> overlay on start
    // this.selectedItem = this.artBlob.data[0] as ArtItem;

    const itemCountLeftGrid = 30;

    this.galleryItemsLeft = this.artBlob.data.splice(0, itemCountLeftGrid);
    this.galleryItemsRight = this.artBlob.data.splice(this.artBlob.data.length * .5);
    console.log(this.galleryItemsLeft);
    console.log(this.galleryItemsRight);
  }

  public hasSelectedItem(): boolean {
    console.log(this.selectedItem !== null);
    return this.selectedItem !== null;
  }

  /**
   * @method get artItems
   * @description called by view
   * @return List of ArtItems
   */
  public get artItems(): Item[] {
    return this.artBlob.data;
  }

  public closeOverlay(): void {
    this.selectedItem = null;
  }


  /**
   * event handling. set selected cast (user clicked on grid-item). bound to view
   * @method doActionOnSelectedItem
   * @param {Item} item for overlay
   */
  public doThumbnailAction(item: ArtItem) {
    console.log(item);
    // console.log(item !== this.selectedItem);
    // this.selectedItem = item;
    const isSameItem = item && item === this.selectedItem;

    this.selectedItem = isSameItem ? null : item;
    // this.selectedItem = Object.create(item);
  }
}
