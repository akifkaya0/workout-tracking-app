import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Globals } from 'src/app/entity/globals';
import { MuscleGroup } from 'src/app/entity/muscle-group';
import { MuscleGroupExerciseDetail } from 'src/app/entity/muscle-group-exercise-detail';
import { MuscleGroupDetailService } from 'src/app/service/muscle-group-detail.service';

@Component({
  selector: 'app-muscle-group-detail',
  templateUrl: './muscle-group-detail.component.html',
  styleUrls: ['./muscle-group-detail.component.scss']
})
export class MuscleGroupDetailComponent implements OnInit {

  @Input("muscleGroup") muscleGroup: MuscleGroup = {
    id: '',
    title: '',
    className: '',
    exercises: []
  }
  prevMuscleGroup : MuscleGroup = {
    id: '',
    title: '',
    className: '',
    exercises: []
  } ;

  global: Globals

  // icon
  faPlus = faPlus

  isNewExercise: boolean = false;

  newExerciseTitle: string = "";

  constructor(private snackBar: MatSnackBar ,private detailService: MuscleGroupDetailService , global: Globals ) {
    this.global = global
  }

  ngOnInit(): void {
  }

  addNewExercise(event : any){

    event.stopPropagation();

    this.muscleGroup.exercises.push({
      detail : {
        name: this.newExerciseTitle,
        className: this.global.turkishtoEnglish(this.newExerciseTitle.replace(' ', '-').toLowerCase()),
        isFavorite: false
      },
      numberOfSets : 3,
      numberOfRepetitions : 12,
      repWeight : [0,0,0],
      volume : 0
    });

    this.detailService.updateMuscleGroup(this.muscleGroup).subscribe();


    this.isNewExercise = false;
    this.newExerciseTitle = ''

  }

  cancelAddNewExercise(event : any){
    event.stopPropagation()
    this.isNewExercise = false;
    this.newExerciseTitle = ''
  }

  deleteExercises(exercises : MuscleGroupExerciseDetail , index : number){

    var snackBarRef = this.snackBar.open(exercises.name + " Silindi ! " , "Geri Al" , {
      duration: 1000
    })

    snackBarRef.afterOpened().subscribe(()=>{

      this.prevMuscleGroup.exercises = [...this.muscleGroup.exercises]
      this.muscleGroup.exercises.splice(index, 1);

    })

    snackBarRef.onAction().subscribe(() => {
      this.muscleGroup.exercises = [...this.prevMuscleGroup.exercises]
    })

    snackBarRef.afterDismissed().subscribe((info)=>{
      if(!info.dismissedByAction){
        this.detailService.updateMuscleGroup(this.muscleGroup).subscribe()
      }
    })

  }

  favoriteHandle(index : number){

    this.muscleGroup.exercises[index].detail.isFavorite = !this.muscleGroup.exercises[index].detail.isFavorite

    this.detailService.updateMuscleGroup(this.muscleGroup).subscribe()

  }



}
