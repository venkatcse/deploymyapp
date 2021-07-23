import { Component, OnInit } from '@angular/core';
import { LoggerService } from './../services/logger/logger.service';
import { DataServiceService } from './../services/dataService/data-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  productsList: Array<object> = [];

  productId: number;
  productName: String;
  productPrice: number;
  avilablity: boolean = false;
  isSave: boolean = true;
  isUpdate: boolean = false;

  currentDateTime: Date;

  constructor(private logger: LoggerService, private data: DataServiceService){
  }

  ngOnInit() {
    this.productId = this.productsList.length + 1;
    this.productsList.push({
      productId: 1,
      productName: 'Moto Phone',
      productPrice: 10000,
      productAviablity: true
    })
    this.data.setData(new Date());
  }

  save() {
    this.productsList.push({
      productId: this.productId,
      productName: this.productName,
      productPrice: this.productPrice,
      productAviablity: this.avilablity
    })
    this.productId = this.productId + 1;
    this.logger.log(this.productsList, 'Product');
    this.logger.alert('Product Added : message from alert function')
    this.clear();
  }

  clear(){
    this.productName = null;
    this.productPrice = null;
    this.avilablity = false;
  }

  deleteProduct(index) {
    this.productsList.splice(index,1)
  }

  editProduct(index) {
    this.productId = this.productsList[index]['productId']
    this.productName = this.productsList[index]['productName']
    this.productPrice  = this.productsList[index]['productPrice']
    this.avilablity = this.productsList[index]['productAviablity']
    this.isSave = false;
    this.isUpdate = true;
  }

  update() {

  }

  setCurrentDateTime(value){
    this.currentDateTime = value;
  }

}
