import { Component, OnInit, SecurityContext, Pipe, PipeTransform } from '@angular/core';
import { MixcloudService } from './mixcloud.service';
import { Cloudcast, CloudcastBlob } from './model/Cloudcast';
import { DomSanitizer } from '@angular/platform-browser';
import { DomSanitizerImpl, SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { MathHelper } from '../shared/MathHelper';



enum WidgetConfig {
  NONE = '',
  HIDE_COVER = 'hide_cover=1',
  MINI = 'mini=1',
  LIGHT = 'light=1',
  AUTO_PLAY = 'autoplay=1',
  HIDE_ARTWORK = 'hide_artwork=1'
}


@Component({
  selector: 'app-mixcloud',
  templateUrl: './mixcloud.component.html',
  styleUrls: ['./mixcloud.component.css']
})
export class MixcloudComponent implements OnInit {

  private static WIDGET_BASE_URL = 'https://www.mixcloud.com/widget/iframe/?feed=';

  public cloudCastBlob: CloudcastBlob;

  public selectedCast: Cloudcast = null;

  private widgetSource: string;

  private widgetConfig: Array<WidgetConfig> = new Array<WidgetConfig>();

  constructor(private mixcloudService: MixcloudService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.selectedCast) {
      this.getCloudcasts();

    }

    this.widgetConfig.push(WidgetConfig.HIDE_COVER,
      WidgetConfig.MINI,
      WidgetConfig.LIGHT
      // WidgetConfig.AUTO_PLAY
    );

  }

  public get iFrameHeight(): string {
    // return this.isWidgetRequested ? '400px' : '0px';
    return '400px';
  }

  public get isWidgetRequested(): boolean {
    return this.selectedCast !== null;
  }


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

  public get portraitUrl(): string {
    if (this.castAvailable) {
      return this.cloudCastBlob.data[0].user.pictures['medium'];
    } else {
      return '';
    }
  }

  public get castAvailable(): boolean {
    return this.cloudCastBlob != null;
  }


  // event handling
  public playCast(castSource: string): void {
    if (castSource && castSource.length > 0) {
      this.safeAdd(this.widgetConfig, WidgetConfig.AUTO_PLAY);
      this.widgetSource = castSource;
      // console.log('playing ' + this.widgetSource);
    }
  }

  public onImageClicked(selectedCloudcast: Cloudcast): void {
    console.log(selectedCloudcast);
    this.selectedCast = selectedCloudcast;
  }

  public closeOverlay(): void {
    this.selectedCast = null;
  }

  // prevents (re-)adding (null) items
  private safeAdd(collection: Array<any>, item: any): void {
    if (!collection || !item) {
      return;
    }

    if (collection.indexOf(item) < 0) {
      collection.push(item);
    }
  }

  private async getCloudcasts() {
    const limit = 0;  // 0 : get all
    const cloudCastBlob = await this.mixcloudService.getCloudcasts(limit);


    try {
      this.cloudCastBlob = cloudCastBlob;

      this.widgetSource = this.getWidgetSource(this.cloudCastBlob, -1);  // first item is initial source
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

  private getWidgetSource(cloudCastBlob: CloudcastBlob, castId: number): string {
    try {
      if (castId < 0) {
        // select random cast
        castId = MathHelper.getRandomInt(0, cloudCastBlob.data.length - 1);
      }

      return cloudCastBlob.data[castId].key;
    } catch (e) {
      console.log('failed to get widget source for item: ' + castId);
      return '';
    }
  }
}
