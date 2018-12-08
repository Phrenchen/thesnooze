import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/Interfaces';

@Component({
  selector: 'app-gallery-overlay',
  templateUrl: './gallery-overlay.component.html',
  styleUrls: ['./gallery-overlay.component.css']
})
export class GalleryOverlayComponent implements OnInit {


  @Input() item: Item;

  @Output() closeMe: EventEmitter<any> = new EventEmitter<any>();
  @Output() doAction: EventEmitter<string> = new EventEmitter<string>();


  public isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  public selectForWidget(): void {
    this.doAction.emit(this.item.key);
    this.closeOverlay();
  }

  public closeOverlay(): void {
    this.closeMe.emit();
  }

  public get createdDate(): string {
    const date: Date = new Date(this.item.created_time);
    // return date.toDateString();
    return this.getDateString(date);
  }

  public get audioLength(): string {
    const durationDate: Date = new Date(this.item.audio_length);
    const timeString = this.getDurationString(durationDate);
    return timeString;
  }

  public getDurationString(date: Date): string {
    return date.toTimeString().split(' ')[0];
  }

  // returns month / day / year
  // mm/dd/yyyy
  private getDateString(date: Date): string {
    const dd = date.getDate();
    let ddStr = dd.toString();
    const mm = (date.getMonth() + 1); // January is 0!
    let mmStr = mm.toString();
    const yyyy = date.getFullYear();

    if (dd < 10) {
      ddStr = '0' + dd;
    }

    if (mm < 10) {
      mmStr = '0' + mm;
    }

    const dateStr = ddStr + '.' + mmStr + '.' + yyyy;
    return dateStr;
  }
}
