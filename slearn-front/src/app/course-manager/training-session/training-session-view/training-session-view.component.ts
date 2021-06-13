import { Component, OnInit } from '@angular/core';
import {TrainingSession} from "../../../model/training.session";
import {TrainingSessionService} from "../../../service/training-session.service";
import {ActivatedRoute} from "@angular/router";
import {LectureService} from "../../../service/lecture.service";

@Component({
  selector: 'app-training-session-view',
  templateUrl: './training-session-view.component.html',
  styleUrls: ['./training-session-view.component.css']
})
export class TrainingSessionViewComponent implements OnInit {
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

  delete(id: number | undefined, i: number) {
    if (id != null) {
      this.trainingService.delete(id).subscribe(resp => {
        this.trainingSessions.splice(i, 1);
      })
    }
  }
}
