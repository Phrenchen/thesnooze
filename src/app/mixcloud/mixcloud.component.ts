import { Component, OnInit } from '@angular/core';
import { MixcloudService } from './mixcloud.service';
import { CloudcastUserBlob, CloudcastItem } from './model/Interfaces';
import { MathHelper } from '../shared/MathHelper';
import { Item } from '../shared/gallery/model/Interfaces';
import { CollectionUtils } from '../shared/CollectionUtils';


enum WidgetConfig {
  NONE = '',
  HIDE_COVER = 'hide_cover=1',
  MINI = 'mini=1',
  LIGHT = 'light=1',
  AUTO_PLAY = 'autoplay=1',
  HIDE_ARTWORK = 'hide_artwork=1'
}

/**
 * controller in charge of handling lists of Cloudcasts.
 * * grid of item-cards
 * * click on item to open overlay with detail view
 * @module Mixcloud
 * @class MixcloudComponent
 */

@Component({
  selector: 'app-mixcloud',
  templateUrl: './mixcloud.component.html',
  styleUrls: ['./mixcloud.component.css']
})
export class MixcloudComponent implements OnInit {

  public static WIDGET_BASE_URL = 'https://www.mixcloud.com/widget/iframe/?feed=';

  public cloudCastBlob: CloudcastUserBlob;

  public selectedItem: CloudcastItem = null;

  private widgetSource: string;

  public widgetConfig: Array<WidgetConfig> = new Array<WidgetConfig>();


  /**
   * injecting MixcloudService
   * @method constructor
   * @param {MixcloudService} mixcloudService
   */
  constructor(
    private mixcloudService: MixcloudService
  ) { }


  /**
   * Angular lifecycle method
   * add widget config enums into config-array
   * @method ngOnInit
   */
  ngOnInit() {
    if (!this.selectedItem) {
      this.getCloudcasts();

    }

    this.widgetConfig.push(WidgetConfig.HIDE_COVER,
      WidgetConfig.MINI,
      WidgetConfig.LIGHT
      // WidgetConfig.AUTO_PLAY
    );

  }

  /**
   * called by view
   * @method get widgetUrl
   */
  public get widgetUrl(): string {
    if (!this.widgetSource) {
      return '';
    }

    let config = '';

    this.widgetConfig.map(cfg => {
      config += '&' + cfg;
    });

    const result = MixcloudComponent.WIDGET_BASE_URL + this.widgetSource + config;
    // console.log(result);
    return result;
  }

  /**
   * called by view
   * @method get portraitUrl
   */
  public get portraitUrl(): string {
    if (this.castAvailable) {
      return this.cloudCastBlob.data[0].user.pictures['medium'];
    } else {
      return '';
    }
  }

  /**
   * helper, used for early outs
   * @method get castAvailable
   */
  public get castAvailable(): boolean {
    return this.cloudCastBlob != null;
  }

  /**
   * event handling. set selected cast (user clicked on grid-item). bound to view
   * @method doActionOnSelectedItem
   * @param {Item} item for overlay
   */
  public doActionOnSelectedItem(item: CloudcastItem) {
    console.log('do action on selected item: ' + item);
    CollectionUtils.safeAdd(this.widgetConfig, WidgetConfig.AUTO_PLAY);
    this.widgetSource = item.key;
  }


  /**
   * triggers MixcloudService to HTTP-GET cloudcasts via Mixcloud API
   * @private
   * @method async getCloudcasts
   */
  private async getCloudcasts() {
    if (this.cloudCastBlob) {
      return;
    }

    const limit = 0;  // 0 : get all
    const cloudCastBlob = await this.mixcloudService.getCloudcasts(limit);

    try {
      this.cloudCastBlob = cloudCastBlob;

      // add ID of specific cast. default is random (-1)
      this.widgetSource = this.getWidgetSource(this.cloudCastBlob, -1);

      // console.log('initial widget source: ' + this.widgetSource);

      // TODO: preselect to initially show the overlay! disable!
      // this.selectedCast = this.cloudCastBlob.data[0];

      // TODO: while has nextBlob for more than 200 cloudcasts
      // const nextBlobUrl = this.cloudCastBlob.paging['next'];
      // if (nextBlobUrl) {
      //   const nextBlob = await this.mixcloudService.getNextCloudcastBatch(nextBlobUrl);
      //   this.cloudCastBlob.data = this.cloudCastBlob.data.concat(nextBlob.data);
      // }

      // console.log('cloudCastBlob: ' + cloudCastBlob.name);
    } catch (e) {
      console.log('failed assigning response to news array');
    }
  }

  

  /**
   * extracts source url for widget for a specific or a random cast
   * @private
   * @method getWidgetSource
   * @param {CloudcastUserBlob} cloudCastBlob
   * @param {number} [-1] - castId
   * @return {string} - sourceUrl
   */
  private getWidgetSource(cloudCastBlob: CloudcastUserBlob, castId: number = -1): string {
    try {
      if (castId === -1) {
        // select random cast
        castId = MathHelper.getRandomInt(0, cloudCastBlob.data.length - 1);
      }

      return (cloudCastBlob.data[castId] as CloudcastItem).key;
    } catch (e) {
      console.log('failed to get widget source for item: ' + castId);
      return '';
    }
  }
}
