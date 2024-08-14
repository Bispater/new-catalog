import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnstarComponent } from './onstar.component';

describe('OnstarComponent', () => {
  let component: OnstarComponent;
  let fixture: ComponentFixture<OnstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnstarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
