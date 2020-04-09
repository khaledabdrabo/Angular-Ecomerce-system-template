import { product } from 'src/app/models/Product';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class shoppingListService{
    SelectedProducts:product[];
    constructor(){
        this.SelectedProducts=[];
    }
    getALL(){
        return this.SelectedProducts;
    }
    getById(id:number){
        return this.SelectedProducts.find(i=>i.id==id);
    }
    add(product:product){
        product.id=this.SelectedProducts.length+1;
        this.SelectedProducts.push(product);
    }
    save(product:product){
        let index=this.SelectedProducts.findIndex(i=>i.id==product.id);
        this.SelectedProducts[index]=product;
    }
    delete(id:number){
        let index=this.SelectedProducts.findIndex(i=>i.id==id);
        this.SelectedProducts.splice(index,1)

    }
    
    


}
