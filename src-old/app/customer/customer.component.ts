import { Component,  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { LoggerService} from './../services/logger/logger.service'
import{DataserviceService} from './../services/data/dataservice.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  customerEntryDetails: Array<object> = [];
  customerId: number;
  customerName: string;
  customerPhoneNo: number;
  customerAddress: string;
  say:any;


  hi = 'hi' // Variable assign
  bye: String; // valiable declaration

  
  constructor (private logger: LoggerService, private data: DataserviceService){

  }
  ngOnInit(): void {
    this.say = this.data.getData();
  }
  
  customerEntryDetailssave() {
    this.customerEntryDetails.push({
      customerId: this.customerId,
      customerName: this.customerName,
      customerPhoneNo: this.customerPhoneNo,
      customerAddress: this.customerAddress
    })
    this.logger.log(this.customerEntryDetails)
    this.clear();
  }

  clear() {
    this.customerId = null;
    this.customerName = null;
    this.customerPhoneNo = null;
    this.customerAddress = null
  }
  ngOnChanges() {
    console.log('From ngOnChanges')
  } 
  ngDoCheck() {
    console.log('From ngDoCheck')
  } 
  ngAfterContentInit() {
    console.log('From ngAfterContentInit')
  } 
  ngAfterContentChecked() {
    console.log('From ngAfterContentChecked')
  } 
  ngAfterViewInit() {
    console.log('From ngAfterViewInit')
  } 
  ngAfterViewChecked() {
    console.log('From ngAfterViewChecked')
  } 
  ngOnDestroy() {
    console.log('From ngOnDestroy')
  }
}
