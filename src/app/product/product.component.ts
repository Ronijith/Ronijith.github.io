import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
 public productArray = [
    {
      prodId: 1,
      qnt: 1
    },
    {
      prodId: 2,
      qnt: 1
    },
    {
      prodId: 3,
      qnt: 1
    },
    {
      prodId: 4,
      qnt: 1
    },
    {
      prodId: 5,
      qnt: 1
    },
    {
      prodId: 6,
      qnt: 1
    }
  ];

  inc(prod:any){
    if(prod.qnt != 5){
      prod.qnt += 1;
    }
  }

  dec(prod:any){
    if(prod.qnt != 1){
      prod.qnt -= 1;
    }
  }
  
@Output() onCountPicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  public pickcount(i:number): void {
    console.log('picked child value'+this.productArray[i].qnt);
   this.onCountPicked.emit(this.productArray[i].qnt);
}
}
