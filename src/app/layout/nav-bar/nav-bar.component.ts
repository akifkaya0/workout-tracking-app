import { Component, OnInit } from '@angular/core';
import { faCalendarDays, faChartColumn, faDumbbell, faFire, faHome} from '@fortawesome/free-solid-svg-icons';
import { NavBarItem } from 'src/app/entity/nav-bar-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navbarIcons = {
    "headerIcon" : faDumbbell,
    "homeIcon" : faHome,
    "statsIcon" : faChartColumn,
    "calendarIcon" : faCalendarDays,
    "workoutIcon" : faFire
  }

  navBarItems: NavBarItem[] = [
    { title: "Ana Sayfa", icon: this.navbarIcons["homeIcon"], path: "/home" },
    { title: "İstatistikler", icon: this.navbarIcons["statsIcon"], path: "/stats" },
    { title: "Takvim", icon: this.navbarIcons["calendarIcon"], path: "/calendar" },
    { title: "Antrenman", icon: this.navbarIcons["workoutIcon"], path: "/workout" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
