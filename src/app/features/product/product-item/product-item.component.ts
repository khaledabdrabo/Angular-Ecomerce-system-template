import { product } from './../../../models/Product';
import { Component, OnInit, Input, Output,EventEmitter   } from '@angular/core';
import { shoppingListService } from '../shoppingList.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() product:product
@Output() itemAdded=new EventEmitter<product>();
 //shoppingService:shoppingListService;
  constructor(private shoppingService:shoppingListService) { }

  ngOnInit(): void {
  }
onItemAdding():void{
  
  this.shoppingService.add(this.product)
  this.itemAdded.emit(this.product)
  //alert(this.product.name)
}
}
