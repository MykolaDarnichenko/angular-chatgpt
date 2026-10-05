import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWishlist } from './product-wishlist';

describe('ProductWishlist', () => {
  let component: ProductWishlist;
  let fixture: ComponentFixture<ProductWishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductWishlist],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductWishlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
