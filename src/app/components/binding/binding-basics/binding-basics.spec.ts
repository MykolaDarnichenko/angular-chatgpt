import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingBasics } from './binding-basics';

describe('BindingBasics', () => {
  let component: BindingBasics;
  let fixture: ComponentFixture<BindingBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingBasics],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingBasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
