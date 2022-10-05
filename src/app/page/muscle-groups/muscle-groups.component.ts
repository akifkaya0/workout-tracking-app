import { Component, OnInit } from '@angular/core';
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

  // icon
  faPlus = faPlus

  // new muscle group of exercise title
  newMuscleTitle: string = ""

  isNewGroup: boolean = false

  constructor(private detailService: MuscleGroupDetailService) { }

  ngOnInit(): void {

    this.detailService.getAllDetails().subscribe(res => this.muscleGroups = res);

  }

  addNewMuscleGroup() {

    this.detailService.addMuscleGroup({
      id: uuid.v4().substring(0, 5),
      title: this.newMuscleTitle,
      className: this.turkishtoEnglish(this.newMuscleTitle.toLowerCase()),
      exercises: []
    }).subscribe(res => this.muscleGroups.push(res));

    this.newMuscleTitle = "";
    this.isNewGroup = false;

  }
  turkishtoEnglish = (word: string) => {
    return word.replace('Ğ', 'g')
      .replace('Ü', 'u')
      .replace('Ş', 's')
      .replace('I', 'i')
      .replace('İ', 'i')
      .replace('Ö', 'o')
      .replace('Ç', 'c')
      .replace('ğ', 'g')
      .replace('ü', 'u')
      .replace('ş', 's')
      .replace('ı', 'i')
      .replace('ö', 'o')
      .replace('ç', 'c');
  };

}
