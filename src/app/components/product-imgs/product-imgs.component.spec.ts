import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgsComponent } from './product-imgs.component';

describe('ProductImgsComponent', () => {
  let component: ProductImgsComponent;
  let fixture: ComponentFixture<ProductImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
