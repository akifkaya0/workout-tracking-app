import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Globals } from 'src/app/entity/globals';
import { MuscleGroup } from 'src/app/entity/muscle-group';
import { WorkoutDay } from 'src/app/entity/workout-day';
import { MuscleGroupDetailService } from 'src/app/service/muscle-group-detail.service';
import { WorkoutDayService } from 'src/app/service/workout-day.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  muscleGroups: MuscleGroup[] = [];
  trainingGroups: FormGroup | undefined;
  allWorkoutDay: WorkoutDay[] = [];

  selectedDate = new FormControl(new Date());

  constructor(private workoutDayService: WorkoutDayService, private detailService: MuscleGroupDetailService) {
  }

  ngOnInit(): void {
    this.detailService.getAllDetails().subscribe(response => {
      this.muscleGroups = response

      this.trainingGroups = this.detailService.toFormGroup(this.muscleGroups)
    });

    this.workoutDayService.getAllWorkoutDay().subscribe(response => {
      this.allWorkoutDay = response
    });

  }

  workoutDayFilter = (date: Date | null): boolean => {
    console.log(this.selectedDate.value)

    const dateObject = (date || new Date());
    return this.allWorkoutDay.find(item => {
      return item.day == dateObject.getDate() && item.month == (dateObject.getMonth() + 1)
    }) ? false : true;

  };

}
