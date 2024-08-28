import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalPopupComponent } from './technical-popup.component';

describe('TechnicalPopupComponent', () => {
  let component: TechnicalPopupComponent;
  let fixture: ComponentFixture<TechnicalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
