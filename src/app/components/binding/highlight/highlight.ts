import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // host: {
  //   'tabindex': '0',
  //   '(keydown.enter)': 'onKeyEnter()'
  //   'style': 'backgroundColor: red;'
  // }
})
export class Highlight {
  @HostBinding('style.background-color') bgColor = 'transparent';
  @HostBinding('aria-selected') selected = false;
  @HostBinding('attr.tabindex') tabindex = 0;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.bgColor = 'transparent';
  }

  @HostListener('click')
  onClick() {
    this.selected = !this.selected;
  }

  @HostListener('keydown.enter')
  onKeyEnter() {
    this.selected = !this.selected;
  }

  @HostListener('keydown.escape')
  onKeyEscape() {
    this.selected = false;
  }


  // onKeyEnter(): void {
  //   this.selected = !this.selected;
  // }
}
