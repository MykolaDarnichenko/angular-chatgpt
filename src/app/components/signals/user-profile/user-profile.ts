import { Component, computed, signal, effect } from '@angular/core';

interface User {
  name: string;
  age: number;
  isOnline: boolean;
}

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  user = signal<User>({
    name: 'John',
    age: 25,
    isOnline: true
  });

  displayName = computed(() => `${this.user().name} (${this.user().age})`);
  displayStatus = computed(() => this.user().isOnline ? 'Online' : 'Offline');


  score = signal(0);

  level = computed(() => {
    const score = this.score();

    if (score < 50) {
      return 'Beginner';
    } 
    
    if (score < 100) {
      return 'Intermediate';
    }

    return 'Advanced';
  })

  constructor() {
    effect(() => {
      console.log('Score changed:', this.score());
    })
  }

  changeName(name: string) {
    this.user.update((user) => ({
      ...user,
      name
    }))
  }

  changeAge(age: string) {
    this.user.update((user) => ({
      ...user,
      age: Number(age)
    }))
  }

  toggleStatus() {
    this.user.update((user) => ({
      ...user, 
      isOnline: !user.isOnline
    }) )
  }

  increaseScore() {
    this.score.update(score => score + 10);
  }
  
  decreaseScore() {
    // if (this.score() <= 5) {
    //   return;
    // }

    // this.score.update(score => score - 5);

    this.score.update(score => Math.max(0, score - 5));
  }
  
  resetScore() {
    this.score.set(0);
  }
}
