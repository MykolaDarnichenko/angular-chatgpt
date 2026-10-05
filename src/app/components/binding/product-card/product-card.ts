import { Component, HostBinding, HostListener, input, output } from '@angular/core';
import { Product } from '../product.model';
import { Highlight } from '../highlight/highlight';

@Component({
  selector: 'app-product-card',
  imports: [Highlight],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})

export class ProductCard {
  product = input.required<Product>();
  productAdded = output<Product>();

  // @HostBinding('style.background-color') bgColor = 'transparent';
  // @HostBinding('aria-selected') selected = false;
  
  // @HostListener('mouseenter') onEnter() {
  //   this.bgColor = 'yellow'; 
  // }

  // @HostListener('mouseleave') onLeave() {
  //   this.bgColor = 'transparent';
  // }

  // @HostListener('click') onClick() {
  //   this.selected = !this.selected;
  // }

  addToCart(product: Product) {
    this.productAdded.emit(product);
  }
}
