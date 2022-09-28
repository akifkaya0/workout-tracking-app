import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/entity/globals';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  global : Globals

  constructor(global : Globals) {
    this.global = global
  }

  ngOnInit(): void {
  }

}
