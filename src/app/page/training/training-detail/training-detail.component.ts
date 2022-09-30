import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/entity/globals';
import { MuscleGroup } from 'src/app/entity/muscle-group';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss']
})
export class TrainingDetailComponent implements OnInit {

  global: Globals
  selectedMuscleGroups: MuscleGroup[] = [];

  constructor(private activatedRoute: ActivatedRoute, global: Globals) { this.global = global }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(res => {

      Object.values(res).map((item, index) => {
        if (item == "true")
          this.selectedMuscleGroups.push(this.global.muscleGroupDefaultEntities[this.global.allMuscleGroups[index + 1].name]);
      })

      console.log(this.selectedMuscleGroups)

    });

  }

  getAllExercises(name: string) {
    return this.global.allMuscleGroups.find(i => i.name == name)?.allExercise
  }

  setExerciseLengthValue(muscleGroupIndex: number, value: number) {
    if (value == -1) this.selectedMuscleGroups[muscleGroupIndex].exercises.pop();
    else this.selectedMuscleGroups[muscleGroupIndex].exercises.push(this.global.getDefaultExercise("" , ""));
  }
  setExerciseNumberOfSets(muscleGroupIndex: number, exerciseIndex: number, value: number) {
    this.selectedMuscleGroups[muscleGroupIndex].exercises[exerciseIndex].numberOfSets += value

    if (value == -1) this.selectedMuscleGroups[muscleGroupIndex].exercises[exerciseIndex].repWeight.pop();
    else this.selectedMuscleGroups[muscleGroupIndex].exercises[exerciseIndex].repWeight.push(0);
  }
  setExerciseNumberOfRepetitions(muscleGroupIndex: number, exerciseIndex: number, value: number) {
    this.selectedMuscleGroups[muscleGroupIndex].exercises[exerciseIndex].numberOfRepetitions += value
  }
  setExerciseRepWeight(muscleGroupIndex: number, exerciseIndex: number, setIndex : number, value: number){
    this.selectedMuscleGroups[muscleGroupIndex].exercises[exerciseIndex].repWeight[setIndex] += value;
  }

}
