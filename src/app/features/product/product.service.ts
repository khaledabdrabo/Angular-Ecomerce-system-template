import { Injectable } from '@angular/core';
import { product } from './../../models/Product';

@Injectable({
  providedIn:'root'
})
export class ProductService{
    products:product[];
    
    constructor (){
        this.products=[
            {
              id: 1,
              name: 'car',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 1000,
              discount: 10
            },
            {
              id: 2,
              name: 'phone',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 2000,
              discount: 0
            },
            {
              id: 3,
              name: 'radio',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 3000,
              discount: 20
            },
            {
              id: 4,
              name: 'bike',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 4000,
              discount: 0
            },
            {
              id: 5,
              name: 'bottle',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 5000,
              discount: 30
            },
            {
              id: 6,
              name: 'claculator',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 5000,
              discount: 10
            },
            {
              id: 7,
              name: 'book',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 6000,
              discount: 0
            },
            {
              id: 8,
              name: 'headphone',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 7000,
              discount: 40
            },
            {
              id: 9,
              name: 'TV',
              imageUrl: 'assets/img/products/product-grey-1.jpg',
              price: 8000,
              discount: 60
            }
          ];
         
    }
    getALL(){
        return this.products.slice()
    }
    getById(id:number){
        return this.products.find(i=>i.id==id);
    }
    add(product:product){
        product.id=this.products.length+1;
        this.products.push(product);
    }
    save(product:product){
        let index=this.products.findIndex(i=>i.id==product.id);
        this.products[index]=product;
    }
    delete(id:number){
        let index=this.products.findIndex(i=>i.id==id);
        this.products.splice(index,1)

    }
    getRelatedProduct(){
      return this.products.slice(1,4)
    }


}