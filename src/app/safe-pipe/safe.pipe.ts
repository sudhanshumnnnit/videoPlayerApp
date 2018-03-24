import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}
  transform(url: any, args?: any): any {
    console.log("this.sanitizer.bypassSecurityTrustResourceUrl(url)",this.sanitizer.bypassSecurityTrustResourceUrl(url));
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
