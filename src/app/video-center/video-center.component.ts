import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../videoservice/video.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;

  selVideo: Video;
  private hideNewVideo:boolean=true;
  newVideoButtonClick(){
    this.hideNewVideo=false;
  }
  onSelectVideo(video: any) {
    this.selVideo = video;
    this.hideNewVideo=true;
    console.log("this.selVideo", this.selVideo)
  }
  constructor(private _VideoService:VideoService) { }

  onSubmitAddVideo(video:Video){
    this._VideoService.addNewVideo(video)
    .subscribe(resNewVideo =>{
      this.videos.push(resNewVideo);
      this.selVideo=resNewVideo;
    });
  }

  ngOnInit() {
    this._VideoService.getVideos()
    .subscribe(res=>this.videos=res);
  }

}
