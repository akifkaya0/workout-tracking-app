import { Injectable } from '@angular/core';
import { MuscleGroup } from '../entity/muscle-group';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MuscleGroupDetailService extends BaseService {

  constructor(private base: BaseService) {
    super(base.http);
  }

  getAllDetails(){
    return this.getReq("/muscleGroupsDetails");
  }

  getMuscleGroupDetail(name : string){
    return this.getReq("/muscleGroupsDetails?name=" + name)
  }

  addMuscleGroup(data : MuscleGroup){
    return this.postReq("/muscleGroupsDetails" , data);
  }

  updateMuscleGroup(data : MuscleGroup){
    return this.putReq("/muscleGroupsDetails/" + data.id , data)
  }

  deleteMuscleGroup(data : MuscleGroup){
    return this.deleteReq(("/muscleGroupsDetails/" + data.id))
  }

}
