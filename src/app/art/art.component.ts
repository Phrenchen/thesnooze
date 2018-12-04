import { Component, OnInit } from '@angular/core';
import { ArtService } from './art.service';
import { ArtItem } from './model/ArtItem';

/**
 * @class ArtComponent
 * @description controller in charge of managing ArtItems
 */
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  public centerImageUrl = './assets/images/vancouver-police-department-charity-dog-calendar-2019-coverimage.jpg';


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

  }

  /**
   * @method get artItems
   * @description called by view
   * @return List of ArtItems
   */
  public get artItems(): ArtItem[] {
    return this.artService.getArtItems();
  }

}
