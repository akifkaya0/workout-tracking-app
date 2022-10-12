import { MuscleGroup } from "./muscle-group";

export interface WorkoutDay {
  id : string,
  day : number,
  month : number,
  muscleGroups : MuscleGroup[]
}
