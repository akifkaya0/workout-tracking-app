import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupDetailComponent } from './muscle-group-detail.component';

describe('MuscleGroupDetailComponent', () => {
  let component: MuscleGroupDetailComponent;
  let fixture: ComponentFixture<MuscleGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleGroupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuscleGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
