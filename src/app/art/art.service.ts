import { Injectable } from '@angular/core';
import { ArtItem } from './model/ArtItem';


/**
 * (http ) GETS and serves ArtItems
 * @module Art
 * @class ArtService
 */
@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private static imageBaseUrl = '/assets/images/';

  private artItems: ArtItem[];

  /**
   * returns 1 list of ArtItems
   * @method getArtItems
   * @return {Array<ArtItem>}
   */
  public getArtItems(): ArtItem[] {
    if (!this.artItems) {
      this.artItems = this.staticArtItems;
    }
    return this.artItems;
  }
  
  /**
   * @private
   * @method get staticArtItems
   * @description helper factory method to construct static data
   * @return {ArtItem[]}
   */
  private get staticArtItems(): ArtItem[] {
    return [
      {
        title: 't1',
        description: 'desc1',
        imageUrl: ArtService.imageBaseUrl + '16b614c5128943c6.png',
        externalUrl: ''
      },
      {
        title: 't2',
        description: 'desc2',
        imageUrl: ArtService.imageBaseUrl + 'anYRGOV_460s.jpg',
        externalUrl: ''
      },
      {
        title: 't3',
        description: 'desc3',
        imageUrl: ArtService.imageBaseUrl + 'b0ff19ea0d184803.jpeg',
        externalUrl: ''
      },
      {
        title: 't3',
        description: 'desc3',
        imageUrl: ArtService.imageBaseUrl + 'e14a106f2980481c.jpeg',
        externalUrl: ''
      },
      {
        title: 't3',
        description: 'desc3',
        imageUrl: ArtService.imageBaseUrl + 'vancouver-police-department-charity-dog-calendar-2019-coverimage.jpg',
        externalUrl: ''
      }

    ];
  }

  /**
   * empty default constructor
   * @method constructor
   */
  constructor() { }
}
