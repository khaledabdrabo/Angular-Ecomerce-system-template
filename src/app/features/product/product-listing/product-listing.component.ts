import { product } from './../../../models/Product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
// import { ProductService } from './features/product/product.service';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products: product[];
  pages:number[]=[];
  pageSize:number=4;
  activePage:number=1;
  //selectedProducts:product[];
  @Output("ItemsChange") productsOutput: EventEmitter<product[]>;
  constructor( private Service:ProductService ) {
    
  //this.selectedProducts=[];
 //const Service =new ProductService();
    
  }
  get numOfPages():number{
    console.log(this.products)
    return Math.ceil(this.products.length/this.pageSize)
  }
  
  // addItemToShopCart(pro: product): void {
  //   // change products 
  //   this.selectedProducts.push(pro);
  //   // emit chages
  //   this.productsOutput.emit(this.selectedProducts)
  //   //alert(pro.id);
  // }

  ngOnInit(): void {
    this.productsOutput = new EventEmitter<product[]>();
    this.products =this.Service.getALL();
    for (let index = 1; index <= this.numOfPages; index++) {
      this.pages.push(index);
      
    }
  }
}
