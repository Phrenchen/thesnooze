import { Component, OnInit } from '@angular/core';
import { ArtService } from './art.service';
import { ArtItem } from './model/ArtItem';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  public centerImageUrl = './assets/images/vancouver-police-department-charity-dog-calendar-2019-coverimage.jpg';



  constructor(private artService: ArtService) { }

  ngOnInit() {

  }

  public get artItems(): ArtItem[] {
    return this.artService.getArtItems();
  }

}
