import { TestBed } from '@angular/core/testing';

import { MuscleGroupDetailService } from './muscle-group-detail.service';

describe('MuscleGroupDetailService', () => {
  let service: MuscleGroupDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuscleGroupDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
