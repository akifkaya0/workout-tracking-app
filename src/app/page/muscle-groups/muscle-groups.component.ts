import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Globals } from 'src/app/entity/globals';
import { MuscleGroup } from 'src/app/entity/muscle-group';
import { MuscleGroupDetailService } from 'src/app/service/muscle-group-detail.service';
import * as uuid from 'uuid';


@Component({
  selector: 'app-muscle-groups',
  templateUrl: './muscle-groups.component.html',
  styleUrls: ['./muscle-groups.component.scss']
})
export class MuscleGroupsComponent implements OnInit {

  muscleGroups: MuscleGroup[] = [];
  prevMuscleGroups : MuscleGroup[] = [];

  // icon
  faPlus = faPlus

  // new muscle group of exercise title
  newMuscleTitle: string = ""

  isNewGroup: boolean = false;

  global : Globals

  constructor(private detailService: MuscleGroupDetailService , private snackBar: MatSnackBar , global : Globals) {
    this.global = global;
   }

  ngOnInit(): void {

    this.detailService.getAllDetails().subscribe(res => this.muscleGroups = res);

  }

  deleteMuscleGroupHandle(muscleGroupName : string , event : any , index : number) {

    event.stopPropagation()

    var snackBarRef = this.snackBar.open(muscleGroupName + " Silindi ! " , "Geri Al" , {
      duration : 1000
    })

    snackBarRef.afterOpened().subscribe(()=>{

      this.prevMuscleGroups = [...this.muscleGroups];
      this.muscleGroups.splice(index, 1);
    })

    snackBarRef.onAction().subscribe(() => {
      this.muscleGroups = [...this.prevMuscleGroups]
    })

    snackBarRef.afterDismissed().subscribe((info)=>{
      if(!info.dismissedByAction){
        this.detailService.deleteMuscleGroup(this.prevMuscleGroups[index]).subscribe()
      }
    })

  }

  cancelAddMuscleGroup(event : any){
    event?.stopPropagation()
    this.isNewGroup = false ;
    this.newMuscleTitle = ''
  }

  addNewMuscleGroup() {

    this.detailService.addMuscleGroup({
      id: uuid.v4().substring(0, 5),
      title: this.newMuscleTitle,
      className: this.global.turkishtoEnglish(this.newMuscleTitle.toLowerCase()),
      exercises: []
    }).subscribe(res =>{
      this.muscleGroups.push(res)
      this.newMuscleTitle = "";
      this.isNewGroup = false;
    });

  }

}
