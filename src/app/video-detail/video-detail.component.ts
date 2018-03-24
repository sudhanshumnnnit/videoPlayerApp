import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:["onlyVideo"]
})
export class VideoDetailComponent implements OnInit {
  private editTitle:boolean=false;

  onTitleClick(){
    this.editTitle=true;
  }
  constructor() { }

  ngOnChanges(){
    this.editTitle=false;
  }
  ngOnInit() {
  }

}
