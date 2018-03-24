import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
  readonly baseAppUrl: string = 'http://localhost:3000';
  readonly baseAPIUrl: string = 'https://api.github.com';

}
