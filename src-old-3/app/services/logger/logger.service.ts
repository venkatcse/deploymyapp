import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(value: any, msg: string) {
    console.log(value);
    alert(msg + ' added');
  }

  alert(msg){
    alert(msg);
  }
}
