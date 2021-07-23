import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  someValue: any;
  constructor() { }

  setData(value){
    this.someValue = value;
  }

  getData(){
    return this.someValue;
  }

}
