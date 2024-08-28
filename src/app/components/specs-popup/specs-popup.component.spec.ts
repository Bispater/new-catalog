import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsPopupComponent } from './specs-popup.component';

describe('SpecsPopupComponent', () => {
  let component: SpecsPopupComponent;
  let fixture: ComponentFixture<SpecsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
