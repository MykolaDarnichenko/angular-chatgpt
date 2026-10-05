import { Component } from '@angular/core';
import { Product } from '../product.model';
import { BindingBasics } from '../binding-basics/binding-basics';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-binding-practice',
  imports: [BindingBasics, ProductCard],
  templateUrl: './binding-practice.html',
  styleUrl: './binding-practice.scss',
})

export class BindingPractice {
  product = {
    name: 'Laptop',
    price: 1200,
    imageUrl: 'https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_16345445.png',
    available: true
  };

  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
  }
}
