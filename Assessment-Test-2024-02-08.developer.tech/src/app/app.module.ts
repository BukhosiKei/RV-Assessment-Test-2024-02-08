import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductGridComponent } from './products/grid/product-grid.component';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductGridComponent,
    ProductListComponent,
    CreateProductComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
