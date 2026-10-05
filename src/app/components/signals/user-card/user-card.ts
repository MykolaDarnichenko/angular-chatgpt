import { Component, computed, input, signal } from '@angular/core';

interface User {
  name: string;
  age: number;
  isOnline: boolean;
}

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  user = input.required<User>();

  displayName = computed(() => {
    return `${this.user().name} (${this.user().age})`;
  })

  displayStatus = computed(() => {
    return this.user().isOnline ? 'Online' : 'Offline' 
  })
}
