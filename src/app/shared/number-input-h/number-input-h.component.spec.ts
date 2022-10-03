import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputHComponent } from './number-input-h.component';

describe('NumberInputHComponent', () => {
  let component: NumberInputHComponent;
  let fixture: ComponentFixture<NumberInputHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
