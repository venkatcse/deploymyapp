import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { DataServiceService } from './../services/dataService/data-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  
  customersList: Array<object> = [];

  customerId: number;
  customerName: String;
  customerPhoneNo: number;
  customerAddress: string;
  isSave: boolean = true;
  isUpdate: boolean = false;

  now: Date = new Date();
  datafromOtherCompo: any;

  constructor(private data: DataServiceService){
    console.log('From Constructor')
  }

  ngOnInit() {
    console.log('From ngOnmInit');
    this.customerId = this.customersList.length + 1;
    this.customersList.push({
      customerId: 1,
      customerName: 'Raju',
      customerPhoneNo: 9876543210,
      customerAddress: 'Salem'
    })
    this.datafromOtherCompo = this.data.getData();
  }

  save() {
    this.customersList.push({
      customerId: this.customerId,
      customerName: this.customerName,
      customerPhoneNo: this.customerPhoneNo,
      customerAddress: this.customerAddress
    })
    this.customerId = this.customerId + 1;
    this.clear();
  }

  clear(){
    this.customerName = null;
    this.customerPhoneNo = null;
    this.customerAddress = null;
  }

  deleteCustomer(index) {
    this.customersList.splice(index,1)
  }

  editCustomer(index) {
    this.customerId = this.customersList[index]['customerId']
    this.customerName = this.customersList[index]['customerName']
    this.customerPhoneNo  = this.customersList[index]['customerPhoneNo']
    this.customerAddress = this.customersList[index]['customerAddress']
    this.isSave = false;
    this.isUpdate = true;
  }

  update() {

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
