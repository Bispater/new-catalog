import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnstarPopupComponent } from './onstar-popup.component';

describe('OnstarPopupComponent', () => {
  let component: OnstarPopupComponent;
  let fixture: ComponentFixture<OnstarPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnstarPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnstarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
