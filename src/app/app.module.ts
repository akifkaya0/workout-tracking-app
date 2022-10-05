import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarComponent } from './page/calendar/calendar.component';
import { Globals } from './entity/globals';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { TrainingComponent } from './page/training/training.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TrainingDetailComponent } from './page/training/training-detail/training-detail.component';
import {MatSelectModule} from '@angular/material/select';
import { NumberInputVComponent } from './shared/number-input-v/number-input-v.component';
import { NumberInputHComponent } from './shared/number-input-h/number-input-h.component';
import { MuscleGroupsComponent } from './page/muscle-groups/muscle-groups.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
    NavBarComponent,
    CalendarComponent,
    TrainingComponent,
    TrainingDetailComponent,
    NumberInputVComponent,
    MuscleGroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
