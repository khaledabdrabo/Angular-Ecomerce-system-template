import { product } from './../../models/Product';


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-list-item',
  templateUrl: './drop-down-list-item.component.html',
  styleUrls: ['./drop-down-list-item.component.scss']
})
export class DropDownListItemComponent implements OnInit {

  @Input() product:product
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
