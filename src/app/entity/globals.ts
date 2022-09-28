import { faCalendarDays, faCaretLeft, faCaretRight, faChartColumn, faDumbbell, faFire, faHome } from '@fortawesome/free-solid-svg-icons';
import { NavBarItem } from './nav-bar-item';

export class Globals {

  public icons = {
    "headerIcon": faDumbbell,
    "homeIcon": faHome,
    "statsIcon": faChartColumn,
    "calendarIcon": faCalendarDays,
    "workoutIcon": faFire,
    "rightArrow": faCaretRight,
    "leftArrow": faCaretLeft
  }

  public pages: NavBarItem[] = [
    { title: "Ana Sayfa", icon: this.icons["homeIcon"], path: "/home" },
    { title: "İstatistikler", icon: this.icons["statsIcon"], path: "/stats" },
    { title: "Takvim", icon: this.icons["calendarIcon"], path: "/calendar" },
    { title: "Antrenman", icon: this.icons["workoutIcon"], path: "/workout" }
  ];

  public allMuscleGroups = [
    { name: "Tümünü Seç", className: "tumunu-sec" },
    { name: "Göğüs", className: "gogus" },
    { name: "Biceps", className: "biceps" },
    { name: "Sırt", className: "sırt" },
    { name: "Triceps", className: "triceps" },
    { name: "Omuz", className: "omuz" },
    { name: "Bacak", className: "bacak" },
    { name: "Bilek", className: "bilek" },
    { name: "Trapez", className: "trapez" }
  ];

}
