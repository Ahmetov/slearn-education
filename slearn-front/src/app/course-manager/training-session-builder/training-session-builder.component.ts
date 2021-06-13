import { Component, OnInit } from '@angular/core';
import {TrainingSession} from "../../model/training.session";
import {Router} from "@angular/router";

@Component({
  selector: 'app-training-session-builder',
  templateUrl: './training-session-builder.component.html',
  styleUrls: ['./training-session-builder.component.css']
})
export class TrainingSessionBuilderComponent implements OnInit {
  public trainingSession: TrainingSession = {description: "", name: ""};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected($event: Event) {

  }

  saveFile() {
    this.router.navigate(['/training-session-content-builder'])
  }
}
