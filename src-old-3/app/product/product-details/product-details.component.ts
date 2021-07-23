import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productListDetails: Array<Object>;
  @Output() now = new EventEmitter<Date>();
  currentDateTime: Date;
  constructor() { }

  ngOnInit(): void {
    console.log(this.productListDetails);
    this.currentDateTime = new Date();
    this.now.emit(this.currentDateTime);
  }
}
