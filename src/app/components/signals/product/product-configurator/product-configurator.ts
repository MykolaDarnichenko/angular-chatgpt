import { Component, computed, input, model } from '@angular/core';
import { Product } from '../../signals-practice/signals-practice';
import { ProductInfo } from '../product-info/product-info';
import { ProductOptions } from '../product-options/product-options';
import { ProductWishlist } from '../product-wishlist/product-wishlist';

@Component({
  selector: 'app-product-configurator',
  imports: [ProductInfo, ProductOptions, ProductWishlist],
  templateUrl: './product-configurator.html',
  styleUrl: './product-configurator.scss',
})
export class ProductConfigurator {
  product = input.required<Product>();
  quantity = model.required<number>();

  total = computed(() => this.product().price * this.quantity() );
}
