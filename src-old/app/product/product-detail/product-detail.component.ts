import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() productDetails: Array<object>;
  @Input() currentDateTime: Date;
  @Output() now = new EventEmitter<string>();
  say: string = 'hi';
  constructor() { }

  ngOnInit(): void {
    this.now.emit(this.say);
  }
}
