import { Component, OnInit } from '@angular/core';
import {TrainingSession} from "../../model/training.session";
import {TrainingSessionContent} from "../../model/training.session.content";
import {TrainingSessionService} from "../../service/training-session.service";
import {ActivatedRoute} from "@angular/router";
import {TrainingSessionContentService} from "../../service/training-session-content.service";

@Component({
  selector: 'app-training-session-content',
  templateUrl: './training-session-content.component.html',
  styleUrls: ['./training-session-content.component.css']
})
export class TrainingSessionContentComponent implements OnInit {
  trainingSessionContent: any;

  public trainingSessionContents: TrainingSessionContent[] = [];
  private id: number;

  constructor(private trainingContentService: TrainingSessionContentService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.trainingContentService.getByTrainingSessionId(this.id).subscribe(resp => {
      this.trainingSessionContents = resp;
    })
  }

}
