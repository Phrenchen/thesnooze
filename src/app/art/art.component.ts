import { Component, OnInit } from '@angular/core';
import { ArtService } from './art.service';
import { ArtItem } from './model/Interfaces';
import { UserBlob, Item } from '../shared/gallery/model/Interfaces';
import { CollectionUtils } from '../shared/CollectionUtils';

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

  public centerImageUrl = './assets/images/vancouver-police-department-charity-dog-calendar-2019-coverimage.jpg';

  public artBlob: UserBlob;

  /**
   * @method constructor
   * @description injects ArtService
   * @param artService
   * @type ArtService
   */
  constructor(private artService: ArtService) { }

  /**
   * @method ngOnInit
   * @description Angular lifecycle method
   */
  ngOnInit() {
    this.artBlob = {
      data: this.artService.getArtItems()
    };
  }

  /**
   * @method get artItems
   * @description called by view
   * @return List of ArtItems
   */
  public get artItems(): Item[] {
    return this.artBlob.data;
  }

  /**
   * event handling. set selected cast (user clicked on grid-item). bound to view
   * @method doActionOnSelectedItem
   * @param {Item} item for overlay
   */
  public doActionOnSelectedItem(item: ArtItem) {
    console.log('do action on selected item: ' + item);
    // CollectionUtils.safeAdd(this.widgetConfig, WidgetConfig.AUTO_PLAY);
    // this.widgetSource = item.key;
  }

}
