import { Component } from '@angular/core';

import { ProductsComponent } from './../products.component';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent extends ProductsComponent {}
