import { Component, output } from '@angular/core';

@Component({
  selector: 'app-user-editor',
  imports: [],
  templateUrl: './user-editor.html',
  styleUrl: './user-editor.scss',
})
export class UserEditor {
  nameChange = output<string>();
  ageChange = output<number>();
  statusToggle = output<void>();
  
  changeName(name: string) {
    this.nameChange.emit(name);
  }

  changeAge(age: string) {
    this.ageChange.emit(Number(age));
  }

  toggleStatus() {
    this.statusToggle.emit();
  }
}
