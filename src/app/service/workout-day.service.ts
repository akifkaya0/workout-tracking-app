import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDayService extends BaseService {

  constructor(private base: BaseService) {
    super(base.http);
  }

  getAllWorkoutDay(){
    return this.getReq("/workoutDay");
  }

  getWorkoutDaysOfThisMonth(month : number){
    return this.getReq("/workoutDay?month=" + month);
  }

}
