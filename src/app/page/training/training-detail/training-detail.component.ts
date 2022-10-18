import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from 'src/app/entity/globals';
import { MuscleGroup } from 'src/app/entity/muscle-group';
import { MuscleGroupExercise } from 'src/app/entity/muscle-group-exercise';
import { MuscleGroupDetailService } from 'src/app/service/muscle-group-detail.service';
import { WorkoutDayService } from 'src/app/service/workout-day.service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss']
})
export class TrainingDetailComponent implements OnInit, AfterViewChecked {

  global: Globals
  selectedMuscleGroups: MuscleGroup[] = [];
  selectedMuscleGroupsView: MuscleGroup[] = [];
  selectedDate: Date | undefined;

  constructor(private router: Router, private workoutDayService: WorkoutDayService, private detailService: MuscleGroupDetailService, private activatedRoute: ActivatedRoute, global: Globals) { this.global = global }

  ngAfterViewChecked(): void {

  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(res => {

      this.detailService.getAllDetails().subscribe(response => {

        Object.values(res).map((item, index) => {
          if (item == "true") {
            this.selectedMuscleGroups.push(response[index]);
            this.selectedMuscleGroupsView.push({
              id: response[index].id, className: response[index].className, title: response[index].title, exercises: response[index].exercises.filter((exercise: { detail: { isFavorite: boolean; }; }) => exercise.detail.isFavorite)
            })
          }
          if (item != "true" && item != "false") {
            this.selectedDate = new Date(item.substr(6, 4), item.substr(3, 2) - 1, item.substr(0, 2))
          }
        })

      });

    });

  }

  getFavoriteExercisesLength(muscleGroup: MuscleGroup): number {
    return muscleGroup.exercises.filter(item => item.detail.isFavorite == true).length
  }

  getAllExercises(muscleGroupName: string) {
    //console.log(this.selectedMuscleGroups.find(item => item.title == muscleGroupName)?.exercises)
    return this.selectedMuscleGroups.find(item => item.title == muscleGroupName)?.exercises
  }

  getDefaultExercise(): MuscleGroupExercise {
    return {
      detail: {
        name: "",
        className: "",
        isFavorite: false
      },
      numberOfSets: 3,
      numberOfRepetitions: 12,
      repWeight: [0, 0, 0],
      volume: 0
    }
  }


  selectedExerciseHandle(muscleGroupName: string, muscleGroupIndex: number, index: number, exerciseTitle: string) {
    const exercise = this.selectedMuscleGroups.find(item => item.title == muscleGroupName)?.exercises.find(item => item.detail.name == exerciseTitle)
    if (exercise) this.selectedMuscleGroupsView[muscleGroupIndex].exercises.splice(index, 1, exercise)
    console.log(this.selectedMuscleGroupsView)
  }


  setExerciseLengthValue(index: number, value: number) {
    if (value == -1) this.selectedMuscleGroupsView[index].exercises.pop();
    else this.selectedMuscleGroupsView[index].exercises.push(this.getDefaultExercise());
  }
  setExerciseNumberOfSets(index: number, exerciseIndex: number, value: number) {
    this.selectedMuscleGroupsView[index].exercises[exerciseIndex].numberOfSets += value

    if (value == -1) this.selectedMuscleGroupsView[index].exercises[exerciseIndex].repWeight.pop();
    else this.selectedMuscleGroupsView[index].exercises[exerciseIndex].repWeight.push(0);
  }
  setExerciseNumberOfRepetitions(index: number, exerciseIndex: number, value: number) {
    this.selectedMuscleGroupsView[index].exercises[exerciseIndex].numberOfRepetitions += value
  }
  setExerciseRepWeight(index: number, exerciseIndex: number, setIndex: number, value: number) {
    this.selectedMuscleGroupsView[index].exercises[exerciseIndex].repWeight[setIndex] += value;
  }


  checkMuscleGroupExercise(muscleGroupName: string): boolean {
    return this.selectedMuscleGroups.find(item => item.title == muscleGroupName)?.exercises.length ? true : false
  }
  checkExerciseInView(exerciseName: string, index: number) {
    return this.selectedMuscleGroupsView[index].exercises.find(item => item.detail.name == exerciseName) ? true : false
  }


  submitTraining() {

    if (this.selectedDate) {

      this.setMuscleGroupsVolume();

      this.workoutDayService.addWorkoutDay({
        id: uuid.v4().substring(0, 5),
        day: this.selectedDate.getDate(),
        month: this.selectedDate.getMonth() + 1,
        muscleGroups: [...this.selectedMuscleGroupsView]
      }).subscribe(res => this.router.navigateByUrl('/calendar'))




    }


  }

  setMuscleGroupsVolume() {
    this.selectedMuscleGroupsView.forEach(muscleGroup => {
      muscleGroup.exercises.forEach(exercise => {
        exercise.volume = (exercise.repWeight.reduce((a, b) => a + b, 0) / exercise.numberOfSets) * exercise.numberOfSets * exercise.numberOfRepetitions
      })
    })
  }

}
