import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ["videos1"],
  outputs: ['SelectVideoEvent']//events going to fired
})
export class VideoListComponent implements OnInit {
  public SelectVideoEvent = new EventEmitter()
  constructor() {

  }

  onSelect(vid: Video) {
    this.SelectVideoEvent.emit(vid)
  }
  ngOnInit() {
  }

}
