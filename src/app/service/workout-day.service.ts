import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutDay } from '../entity/workout-day';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDayService extends BaseService {

  constructor(private base: BaseService) {
    super(base.http);
  }

  getAllWorkoutDay() : Observable<WorkoutDay[]> {
    return this.getReq("/workoutDay");
  }

  getWorkoutDaysOfThisMonth(month : number) : Observable<WorkoutDay[]> {
    return this.getReq("/workoutDay?month=" + month);
  }

  addWorkoutDay(data : WorkoutDay) : Observable<WorkoutDay>{
    return this.postReq("/workoutDay" , data);
  }

}
