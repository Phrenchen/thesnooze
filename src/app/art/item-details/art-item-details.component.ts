import { Component, OnInit, Input } from '@angular/core';
import { ArtItem } from '../model/Interfaces';

@Component({
  selector: 'app-art-item-details',
  templateUrl: './art-item-details.component.html',
  styleUrls: ['./art-item-details.component.css']
})
export class ArtItemDetailsComponent implements OnInit {

  @Input() items: ArtItem[];

  constructor() { }

  ngOnInit() {
    console.log('item count: ' + this.items.length);
  }

}
