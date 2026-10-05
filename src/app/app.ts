import { Component } from '@angular/core';
import { SignalsPractice } from './components/signals/signals-practice/signals-practice';
import { BindingPractice } from './components/binding/binding-practice/binding-practice';

@Component({
  selector: 'app-root',
  imports: [SignalsPractice, BindingPractice],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App { }
