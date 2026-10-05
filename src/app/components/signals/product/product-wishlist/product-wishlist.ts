import { Component, input, output } from '@angular/core';
import { Product } from '../../signals-practice/signals-practice';

@Component({
  selector: 'app-product-wishlist',
  imports: [],
  templateUrl: './product-wishlist.html',
  styleUrl: './product-wishlist.scss',
})
export class ProductWishlist {
  product = input.required<Product>()

  productAdded = output<Product>();

  addWishList(product: Product) {
    this.productAdded.emit(product);
  }
}
