import { TestBed } from '@angular/core/testing';

import { WorkoutDayService } from './workout-day.service';

describe('WorkoutDayService', () => {
  let service: WorkoutDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
