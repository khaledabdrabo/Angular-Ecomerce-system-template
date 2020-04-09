import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/models/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//  @Input("added-items") addedItems:product[]
  constructor() { }

  ngOnInit(): void {
  }

}
