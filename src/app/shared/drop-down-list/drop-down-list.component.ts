import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/models/Product';
import { shoppingListService } from 'src/app/features/product/shoppingList.service';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent implements OnInit {
isOpened=false;


  constructor() {
    // const shopcartService=new shoppingListService();
    
   }

  ngOnInit(): void {
  }

}
