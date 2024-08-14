import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorizerComponent } from './colorizer.component';

describe('ColorizerComponent', () => {
  let component: ColorizerComponent;
  let fixture: ComponentFixture<ColorizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
