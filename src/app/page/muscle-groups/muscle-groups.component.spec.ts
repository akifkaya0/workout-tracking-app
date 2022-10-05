import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupsComponent } from './muscle-groups.component';

describe('MuscleGroupsComponent', () => {
  let component: MuscleGroupsComponent;
  let fixture: ComponentFixture<MuscleGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuscleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
