import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Video } from '../video';
import { GlobalService } from '../global-service/global.service';


@Injectable()
export class VideoService {

 private _getUrl="/api/videos";
 private _postUrl="/api/video";
  constructor (private _http: Http,private _global: GlobalService) {
  
  }

  getVideos(){
    return this._http.get(this._global.baseAppUrl+this._getUrl)
    .map((response:Response)=>response.json());
  }

  addNewVideo(video:Video){
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers})
    return this._http.post(this._global.baseAppUrl+this._postUrl,JSON.stringify(video),options)
    .map((res:Response)=>res.json());
  }

}
