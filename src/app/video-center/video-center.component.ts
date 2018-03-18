import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    {
      _id: "1", title: "title1", url: "url 1", desc: "desc 1"
    },
    {
      _id: "2", title: "title2", url: "url 1", desc: "desc 1"
    },
    {
      _id: "3", title: "title1", url: "url 1", desc: "desc 1"
    },
    {
      _id: "4", title: "title1", url: "url 1", desc: "desc 1"
    }
  ];

  selVideo: Video;

  onSelectVideo(video: any) {
    this.selVideo = video;
    console.log("this.selVideo", this.selVideo)
  }
  constructor() { }

  ngOnInit() {
  }

}
