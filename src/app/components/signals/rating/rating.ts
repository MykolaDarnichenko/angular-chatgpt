import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating {
  rating = model.required<number>();

  selectRating(value: number) {
    this.rating.set(value);
  }
}
