import { Component, OnInit, Input } from '@angular/core';
import { ArtItem } from '../model/Interfaces';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

  @Input() items: ArtItem[];

  constructor() { }

  ngOnInit() {
    console.log('item count: ' + this.items.length);
  }

}
