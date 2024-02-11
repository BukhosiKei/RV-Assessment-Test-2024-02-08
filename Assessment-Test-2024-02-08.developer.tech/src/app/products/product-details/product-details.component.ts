// product-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../rv-product.service';
import { Observable } from 'rxjs';

interface Product {
  title: string;
  image: string;
  price: number;
  // Add more properties if needed
}

@Component({
  selector: 'app-product-details',
  template: `
    <div *ngIf="product">
      <h2>{{ product.title }}</h2>
      <img [src]="product.image" alt="Product Image">
      <p>Price: R {{ product.price }}</p>
    </div>
    <div *ngIf="!product">
      <p>Loading...</p>
    </div>
  `,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')! || 0; // Use default for falsy ID

    if ('getProduct' in this.productService) {
      const getProductFunction = this.productService.getProduct as (id: number) => Observable<Product>;

      getProductFunction(productId).subscribe(
        (product: Product) => {
          this.product = product;
        },
        (error: any) => {
          console.error('Error fetching product:', error);
        }
      );
    } else {
      console.warn('ProductService does not have `getProduct` method. Using `getProducts` instead.');
      this.productService.getProducts().subscribe(
        (products: Product[]) => {
          // Find product by index from `getProducts` results (handle potential not found)
          const foundProduct = products[productId];

          if (foundProduct) {
            this.product = foundProduct;
          } else {
            console.error('Product not found with ID:', productId);
          }
        },
        (error: any) => {
          console.error('Error fetching products:', error);
        }
      );
    }
  }
}
