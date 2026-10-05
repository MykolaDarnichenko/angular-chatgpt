import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-basics',
  imports: [FormsModule],
  templateUrl: './binding-basics.html',
  styleUrl: './binding-basics.scss',
})
export class BindingBasics {
  title = 'Angular Binding';
  description = 'Learning data binding';

  isDisabled = true;
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';

  clickCount = 0;

  name = '';

  increaseScore() {
    this.clickCount++;
  }
}
