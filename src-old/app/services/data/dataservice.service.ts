import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  data: any;

  constructor() {
  }

  setData(value) {
    this.data = value
  }

  getData() {
    return this.setData;
  }
}
