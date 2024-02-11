// Modifying the component that displays the product list:
// product-list.component.ts


import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from '../products.component';
import { ProductService } from '../rv-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  public heading: string = 'Product List';
  public products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  selectProduct(product: any): void {
    // Handle the selected product, e.g., navigate to a details page or display more information.
    console.log('Selected Product:', product);
    // Add your logic here based on what you want to do with the selected product.
  }
}
