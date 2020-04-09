import { Component } from '@angular/core';
import { product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // addedItems:product[];
  title = 'first-app';
  // setProducts(pro:product[]):void{

  //   this.addedItems=pro
  // }
}
