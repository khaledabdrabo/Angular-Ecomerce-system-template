import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { DropDownListComponent } from 'src/app/shared/drop-down-list/drop-down-list.component';
import { DropDownListItemComponent } from 'src/app/shared/drop-down-list-item/drop-down-list-item.component';
import { ShoppingListDropDownComponent } from './shopping-list-drop-down/shopping-list-drop-down.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  
  declarations: [
    
    ProductItemComponent,
    ProductListingComponent,
    
    DropDownListItemComponent,
    ShoppingListDropDownComponent,
    ProductAddComponent,
    ProductDetailsComponent
  ],
  
  exports:[ShoppingListDropDownComponent,ProductItemComponent],
  imports: [
    SharedModule,
    CommonModule,RouterModule.forChild([{path:"product/listing", component:ProductListingComponent}
    ,{path:"product/edit/:id", component:ProductAddComponent}
    ,{path:"product/add", component:ProductAddComponent}
    ,{path:"product/details/:id", component:ProductDetailsComponent}])
  ]
})
export class ProductModule { }
