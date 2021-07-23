import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  constructor() { }

  log(value) {
    console.log(value);
  }

}
