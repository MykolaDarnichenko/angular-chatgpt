import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsPractice } from './signals-practice';

describe('SignalsPractice', () => {
  let component: SignalsPractice;
  let fixture: ComponentFixture<SignalsPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
