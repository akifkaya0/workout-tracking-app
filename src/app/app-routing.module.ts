import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './page/calendar/calendar.component';
import { TrainingDetailComponent } from './page/training/training-detail/training-detail.component';
import { TrainingComponent } from './page/training/training.component';

const routes: Routes = [
  {path : "calendar" , component: CalendarComponent},
  {path : "training" , component : TrainingComponent},
  {path : "training-detail" , component : TrainingDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
