import { MuscleGroupExerciseDetail } from "./muscle-group-exercise-detail"

export interface MuscleGroupExercise {
  detail : MuscleGroupExerciseDetail,
  numberOfSets : number,
  numberOfRepetitions : number,
  repWeight : number[],
  volume : number
}
