import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Cloudcast } from '../model/Cloudcast';
import { MixcloudService } from '../mixcloud.service';

@Component({
  selector: 'app-mixcloud-overlay',
  templateUrl: './mixcloud-overlay.component.html',
  styleUrls: ['./mixcloud-overlay.component.css']
})
export class MixcloudOverlayComponent implements OnInit {

  @Input() cloudcast: Cloudcast;

  @Output() closeMe: EventEmitter<any> = new EventEmitter<any>();
  @Output() playMe: EventEmitter<string> = new EventEmitter<string>();


  public isLoading = false;

  public get createdDate(): string {
    const date: Date = new Date(this.cloudcast.created_time);
    // return date.toDateString();
    return this.getDateString(date);
  }

  public get audioLength(): string {
    const durationDate: Date = new Date(this.cloudcast.audio_length);
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


  constructor(private mixcloudService: MixcloudService) { }

  ngOnInit() {
  }

  public selectForWidget(): void {
    this.playMe.emit(this.cloudcast.key);
    this.closeOverlay();
  }

  public closeOverlay(): void {
    this.closeMe.emit();
  }
}
