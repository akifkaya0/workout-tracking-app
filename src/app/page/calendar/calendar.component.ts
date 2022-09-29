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

  // Calendar Variables
  selectedDate: Date = new Date();
  calendarDays: (CalendarDay | null)[] = [];
  workoutDays: WorkoutDay[] = [];

  constructor(global: Globals, private router: Router, private workoutDayService: WorkoutDayService) { this.global = global }

  ngOnInit(): void {

    this.setCalendarDays();
    this.setWorkoutDays(this.selectedDate.getMonth() + 1);

  }

  getPageName() { return this.global.pages.find(item => item.path == this.router.url)?.title }

  setSelectedMonth(index: number) {

    this.selectedDate.setMonth(this.selectedDate.getMonth() + index);
    this.setCalendarDays();
    this.setWorkoutDays(this.selectedDate.getMonth() + 1);

  }
  setCalendarDays() {

    const date = new Date(2022, this.selectedDate.getMonth(), 1);

    let daysArray: (CalendarDay | null)[] = []

    if (this.selectedDate.getMonth() != 0) {
      while (date.toLocaleString(
        'tr-TR', { weekday: 'long' }
      ) !== "Pazartesi") {
        date.setDate(date.getDate() - 1)
      }
    }
    else {
      let day = date.getDay()
      while (day != 1) {
        daysArray.unshift(null)
        day--;
      }
    }

    while (date.getMonth() <= this.selectedDate.getMonth()) {

      daysArray.push({
        date: new Date(date),
        className: ""
      })
      if (date.getDate() == 31 && date.getMonth() == 11) break
      date.setDate(date.getDate() + 1)

    }

    if (this.selectedDate.getMonth() != 11) {
      while (date.toLocaleString(
        'tr-TR', { weekday: 'long' }
      ) !== "Pazartesi") {
        daysArray.push({
          date: new Date(date),
          className: ""
        })
        date.setDate(date.getDate() + 1)
      }
    } else {
      let day = date.getDay()
      while (day != 7) {
        daysArray.push(null)
        day++
      }
    }

    this.calendarDays = daysArray
  }
  setWorkoutDays(month: number) {
    this.workoutDayService.getWorkoutDaysOfThisMonth(month).subscribe(res => {
      this.workoutDays = res
      this.statistics[1].value = this.workoutDays.length
      this.setCalendarDaysClassName();
      this.setMonthlyWorkoutCount();
    });
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
  getCalendarDays(): (CalendarDay | null)[] {
    return this.calendarDays
  }


}
