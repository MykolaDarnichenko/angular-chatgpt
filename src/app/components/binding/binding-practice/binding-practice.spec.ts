import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPractice } from './binding-practice';

describe('BindingPractice', () => {
  let component: BindingPractice;
  let fixture: ComponentFixture<BindingPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
