import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count = input.required<number>();
  min = input.required<number>();
  max = input.required<number>();

  countIncreased = output<void>();
  countDecreased = output<void>();
  countReset = output<void>();

  canDecrease = computed(() => {
    return this.count() > this.min();
  })

  canIncrease = computed(() => {
    return this.count() < this.max();
  })

  onDecrease() {
    this.countDecreased.emit();
  }

  onIncrease() {
    this.countIncreased.emit();
  }

  onReset() {
    this.countReset.emit();
  }
}
