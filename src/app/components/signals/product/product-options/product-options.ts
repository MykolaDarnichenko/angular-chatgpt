import { Component, computed, model } from '@angular/core';

@Component({
  selector: 'app-product-options',
  imports: [],
  templateUrl: './product-options.html',
  styleUrl: './product-options.scss',
})
export class ProductOptions {
  quantity = model.required<number>();

  minimum = 1;
  maximum = 10;

  canDecrease = computed(() => {
    return this.quantity() > this.minimum;
  }) 

  canIncrease = computed(() => {
    return this.quantity() < this.maximum;
  }) 

  onDecrease() {
    this.quantity.update(quantity => quantity - 1);
  }

  onIncrease() {
    this.quantity.update(quantity => quantity + 1);
  }
}
