import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:["onlyVideo"]
})
export class VideoDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
