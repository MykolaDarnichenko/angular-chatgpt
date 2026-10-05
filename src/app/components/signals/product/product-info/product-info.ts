import { Component, input, model } from '@angular/core';
import { Product } from '../../signals-practice/signals-practice';
import { ProductOptions } from '../product-options/product-options';
import { ProductWishlist } from '../product-wishlist/product-wishlist';

@Component({
  selector: 'app-product-info',
  imports: [ProductOptions, ProductWishlist],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  product = input.required<Product>();
  quantity = input.required<number>();
  total = input.required<number>();
}
