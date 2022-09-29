import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CalendarDay } from 'src/app/entity/calendar-day';
import { Globals } from 'src/app/entity/globals';
import { WorkoutDay } from 'src/app/entity/workout-day';
import { WorkoutDayService } from 'src/app/service/workout-day.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  global: Globals

  statistics = [
    { title: "Toplam Hacim", subtitle: "Bu Hafta", value: 0 },
    { title: "Yapılan Antrenman Sayısı", subtitle: "Bu Ay", value: 0 },
    { title: "-", subtitle: "-", value: 0 }
  ];

  selectedDate: Date = new Date();
  getPageName() {
    return this.global.pages.find(item => item.path == this.router.url)?.title
  }

  setSelectedMonth(index: number) {

    this.selectedDate.setMonth(this.selectedDate.getMonth() + index);
    this.setWorkoutDays(this.selectedDate.getMonth() + 1);

  }
  getSelectedMonth() {
    return this.selectedDate.getMonth();
  }
  getSelectedLongMonthName() {
    return this.selectedDate.toLocaleDateString("tr-TR", { month: "long" });
  }
  getShortWeekdayNames(): string[] {
    var date = new Date(2022, 0, 3);
    var weekday = [];
    do {
      weekday.push(date.toLocaleDateString("tr-TR", { weekday: "short" }))
      date.setDate(date.getDate() + 1)
    } while (date.getDay() != 1);
    return weekday
  }


}
