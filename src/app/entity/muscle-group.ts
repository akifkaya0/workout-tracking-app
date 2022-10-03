import { MuscleGroupExercise } from "./muscle-group-exercise";

export interface MuscleGroup {
  id : string,
  title : string,
  className : string,
  exercises : MuscleGroupExercise[]
}
