import { Component, OnInit,NO_ERRORS_SCHEMA } from '@angular/core';

import { product } from './../../../models/Product';
import { ProductService } from './../product.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 
  product:product;
  getRelatedProduct:product[]
  constructor(private router:Router, private activatedRote:ActivatedRoute,private productServices:ProductService) { }

  ngOnInit(): void {
    this.getRelatedProduct=this.productServices.getRelatedProduct();
   // const id=+this.activatedRote.snapshot.params.id;
    let id
    this.activatedRote.params.subscribe(params=>{
      id=+params.id,
      this.product=this.productServices.getById(id);
    });

  }

}
