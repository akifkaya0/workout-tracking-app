import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Globals } from 'src/app/entity/globals';
import { MuscleGroup } from 'src/app/entity/muscle-group';
import { MuscleGroupDetailService } from 'src/app/service/muscle-group-detail.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  muscleGroups : MuscleGroup[] = [];
  trainingGroups : FormGroup | undefined

  constructor(private detailService : MuscleGroupDetailService) {
  }

  ngOnInit(): void {
    this.detailService.getAllDetails().subscribe(response => {
      this.muscleGroups = response

      this.trainingGroups = this.detailService.toFormGroup(this.muscleGroups)
    })
  }

}
