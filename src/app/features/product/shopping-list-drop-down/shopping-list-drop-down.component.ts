import { Component, OnInit,Input } from '@angular/core';
import { product } from 'src/app/models/Product';
import { shoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-list-drop-down',
  templateUrl: './shopping-list-drop-down.component.html',
  styleUrls: ['./shopping-list-drop-down.component.scss']
})
export class ShoppingListDropDownComponent implements OnInit {
  @Input("added-items") addedItems:product[]
  constructor(private shopcartService:shoppingListService) {
    // const shopcartService=new shoppingListService();
    this.addedItems=shopcartService.getALL();
   }
  getTotalCount():number{
    return this.addedItems.length

  }
  ngOnInit(): void {
  }

}
