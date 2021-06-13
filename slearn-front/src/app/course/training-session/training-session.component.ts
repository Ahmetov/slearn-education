import { Component, OnInit } from '@angular/core';
import {TrainingSessionService} from "../../service/training-session.service";
import {ActivatedRoute} from "@angular/router";
import {TrainingSession} from "../../model/training.session";

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.css']
})
export class TrainingSessionComponent implements OnInit {

  public trainingSessions: TrainingSession[] = [];
  private id: number;

  constructor(private trainingService: TrainingSessionService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.trainingService.getByCourseId(this.id).subscribe(resp => {
      this.trainingSessions = resp;
    })
  }

}
