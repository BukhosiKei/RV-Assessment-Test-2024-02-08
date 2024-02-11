import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
  gender: string;
  size: string;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './rv-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    description: '',
    gender: '',
    size: ''
  };

  onSubmit() {
    // Access form data using this.product
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(this.product);
    localStorage.setItem('products', JSON.stringify(products));
    // Reset form
    this.product = {
      name: '',
      price: 0,
      description: '',
      gender: '',
      size: ''
    };
  }

  ngOnInit() {
    // Load initial products from storage
  }

}
