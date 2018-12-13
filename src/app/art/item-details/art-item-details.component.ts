import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ArtItem } from '../model/Interfaces';
import { TextUtils } from 'src/app/shared/TextUtils';
import { MathHelper } from 'src/app/shared/MathHelper';

@Component({
  selector: 'app-art-item-details',
  templateUrl: './art-item-details.component.html',
  styleUrls: ['./art-item-details.component.css']
})
export class ArtItemDetailsComponent implements OnInit, AfterViewInit {

  @Input() item: ArtItem;

  constructor() { }

  ngOnInit() {
    console.log(this.item);

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log(this.item);

  }

  public get description(): string {
    // return TextUtils.randomText(MathHelper.getRandomInt(600, 900));   // max. 1000 letters of lorem ipsum text
    // return TextUtils.randomText(MathHelper.getRandomInt(100, 200));   // max. 1000 letters of lorem ipsum text
    return this.item.description;
  }
}
