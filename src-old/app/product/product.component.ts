import { Component, OnInit } from '@angular/core';
import{ DataserviceService } from './../services/data/dataservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productEntryDetails: Array<object> = [];
  productId: number;
  productName: string;
  productPrice: number;
  productAvailablity: boolean = false;
  productQuantity: number;
  avilablity: boolean = false;
  isSave: boolean = true;
  isUpdate: boolean = false;
  now: Date = new Date();
  hello: string;
  hi: string = 'hi'

  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
    this.data.setData(this.hi);
  }
  
  prodctSave() {
    this.productEntryDetails.push({
      productId: this.productId,
      productName: this.productName,
      productPrice: this.productPrice,
      productAvailablity: this.productAvailablity,
      productQuantity: this.productQuantity
    })
    console.log(this.productEntryDetails);
    this.productclear();
  }

  productclear() {
    this.productId = null;
    this.productName = null;
    this.productPrice = null;
    this.productAvailablity = null;
    this.productQuantity = null;
  }
  deleteProduct(index) {
    this.productEntryDetails.splice(index,1)
  }
  editProduct(index) {
    this.productId = this.productEntryDetails[index]['productId']
    this.productName = this.productEntryDetails[index]['productName']
    this.productPrice  = this.productEntryDetails[index]['productPrice']
    this.productAvailablity = this.productEntryDetails[index]['productAviablity']
    this.isSave = false;
    this.isUpdate = true;
  }
  update(){
    
  }
  setHello(value){
    this.hello = value    
  }


}

