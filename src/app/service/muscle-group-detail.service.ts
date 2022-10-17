import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MuscleGroup } from '../entity/muscle-group';
import { BaseService } from './base.service';
import { CheckboxToBeChecked } from './validators/checkbox-to-be-checked';

@Injectable({
  providedIn: 'root'
})
export class MuscleGroupDetailService extends BaseService {

  constructor(private base: BaseService) {
    super(base.http);
  }

  getAllDetails() : Observable<MuscleGroup[]> {
    return this.getReq("/muscleGroupsDetails");
  }

  getMuscleGroupDetail(name: string) {
    return this.getReq("/muscleGroupsDetails?name=" + name)
  }

  addMuscleGroup(data: MuscleGroup) {
    return this.postReq("/muscleGroupsDetails", data);
  }

  updateMuscleGroup(data: MuscleGroup) {
    return this.putReq("/muscleGroupsDetails/" + data.id, data)
  }

  deleteMuscleGroup(data: MuscleGroup) {
    return this.deleteReq(("/muscleGroupsDetails/" + data.id))
  }

  toFormGroup(muscleGroups: MuscleGroup[]) {
    const group : any = {};

    if(!muscleGroups) return undefined;

    muscleGroups.forEach(item => {
      group[item.title] = new FormControl(false)
    });
    return new FormGroup(group , CheckboxToBeChecked.requireCheckboxesToBeCheckedValidator);
  }

}
