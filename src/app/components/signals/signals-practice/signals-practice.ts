import { Component, signal } from '@angular/core';
import { UserCard } from '../user-card/user-card';
import { UserEditor } from '../user-editor/user-editor';
import { Counter } from '../counter/counter';
import { Rating } from '../rating/rating';
import { ProductConfigurator } from '../product/product-configurator/product-configurator';
import { ProductWishlist } from '../product/product-wishlist/product-wishlist';

export interface Product {
  name: string,
  price: number
}

@Component({
  selector: 'app-signals-practice',
  imports: [UserCard, UserEditor, Counter, Rating, ProductConfigurator, ProductWishlist],
  templateUrl: './signals-practice.html',
  styleUrl: './signals-practice.scss',
})
export class SignalsPractice {
    // user = signal({
  //   name: 'John',
  //   age: 25,
  //   isOnline: true
  // });

  // changeName(name: string) {
  //   this.user.update((user) => ({
  //     ...user,
  //     name
  //   }))
  // }

  // changeAge(age: number) {
  //   this.user.update((user) => ({
  //     ...user,
  //     age: age
  //   }))
  // }

  // toggleStatus() {
  //   this.user.update((user) => ({
  //     ...user, 
  //     isOnline: !user.isOnline
  //   }) )
  // }

  // count = signal(0);
  // min = signal(5);
  // max = signal(10);

  // constructor() {
  //   this.initialValue();
  // }

  // onDecrease() {
  //   this.count.set(this.count() - 1);
  // }

  // onIncrease() {
  //   this.count.update(val => val + 1);
  // }

  // onReset() {
  //   this.initialValue();
  // }

  // initialValue() {
  //   if (0 <= this.min()) {
  //     this.count.set(0);
  //   }

  //   this.count.set(this.min());
  // }


  // rating = signal(3);

  product = signal<Product>({
    name: 'Laptop',
    price: 1000
  });

  quantity = signal(1);


  wishlist = signal<Product[]>([]);

  addToWishlist(product: Product) {
    this.wishlist.update(wishlist => [...wishlist, product]);
    console.log(this.wishlist());
  }
}