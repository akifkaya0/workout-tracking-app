import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Globals } from 'src/app/entity/globals';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  trainingGroups = new FormGroup({
    'Göğüs': new FormControl(false),
    'Biceps': new FormControl(false),
    'Sırt': new FormControl(false),
    'Triceps': new FormControl(false),
    'Omuz': new FormControl(false),
    'Bacak': new FormControl(false),
    'Bilek': new FormControl(false),
    'Trapez': new FormControl(false),
  });

  global : Globals

  constructor(global : Globals) {
    this.global = global
  }

  ngOnInit(): void {
  }

}
