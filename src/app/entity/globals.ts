import { faAngleDown, faAngleUp, faCalendarDays, faCaretLeft, faCaretRight, faChartColumn, faDumbbell, faFire, faHome, faMinus, faPersonWalking, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MuscleGroupExercise } from './muscle-group-exercise';
import { NavBarItem } from './nav-bar-item';

export class Globals {

  public icons = {
    "headerIcon": faDumbbell,
    "homeIcon": faHome,
    "statsIcon": faChartColumn,
    "calendarIcon": faCalendarDays,
    "trainingIcon": faFire,
    "rightArrow": faCaretRight,
    "leftArrow": faCaretLeft,
    "plus": faPlus,
    "minus": faMinus,
    "muscleGroupIcon" : faPersonWalking,
    "angleUp" : faAngleUp,
    "angleDown" : faAngleDown
  }

  turkishtoEnglish = (word: string) => {
    return word.replace('Ğ', 'g')
      .replace('Ü', 'u')
      .replace('Ş', 's')
      .replace('I', 'i')
      .replace('İ', 'i')
      .replace('Ö', 'o')
      .replace('Ç', 'c')
      .replace('ğ', 'g')
      .replace('ü', 'u')
      .replace('ş', 's')
      .replace('ı', 'i')
      .replace('ö', 'o')
      .replace('ç', 'c');
  };

  public pages: NavBarItem[] = [
    { title: "Ana Sayfa", icon: this.icons["homeIcon"], path: "/home" },
    { title: "İstatistikler", icon: this.icons["statsIcon"], path: "/stats" },
    { title: "Takvim", icon: this.icons["calendarIcon"], path: "/calendar" },
    { title: "Antrenman", icon: this.icons["trainingIcon"], path: "/training" }
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
