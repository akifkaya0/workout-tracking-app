import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputVComponent } from './number-input-v.component';

describe('NumberInputVComponent', () => {
  let component: NumberInputVComponent;
  let fixture: ComponentFixture<NumberInputVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
