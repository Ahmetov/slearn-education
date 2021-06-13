import { Component, OnInit } from '@angular/core';
import {TrainingSession} from "../../model/training.session";
import {TrainingSessionContent} from "../../model/training.session.content";

@Component({
  selector: 'app-training-session-content-builder',
  templateUrl: './training-session-content-builder.component.html',
  styleUrls: ['./training-session-content-builder.component.css']
})
export class TrainingSessionContentBuilderComponent implements OnInit {

  public trainingSessionContent: TrainingSessionContent = {content: "", subtitle: ""};


  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected($event: Event) {

  }

  saveAndNext() {

  }
}
