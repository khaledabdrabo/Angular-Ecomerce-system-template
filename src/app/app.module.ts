import { SharedModule } from './shared/shared.module';
import { ProductModule } from './features/product/product.module';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { shoppingListService } from './features/product/shoppingList.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './my-component/nav-bar/nav-bar.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { ProductAddComponent } from './features/product/product-add/product-add.component';
import {RouterModule} from '@angular/router';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  declarations: [
    AppComponent, 
    
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    
  ],
  imports: [
    ProductModule,
    SharedModule,
    BrowserModule,RouterModule.forRoot(
      [{path:"product/listing", component:ProductListingComponent}
      ,{path:"product/edit/:id", component:ProductAddComponent}
      ,{path:"product/add", component:ProductAddComponent}
      ,{path:"product/details/:id", component:ProductDetailsComponent}],{scrollPositionRestoration:'top'}),
    
    //BrowserModule,RouterModule.forRoot([{path:"product/add", component:ProductAddComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
