import {Component, OnInit} from '@angular/core';
import {TrainingSession} from "../../model/training.session";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TrainingSessionBuilderAddComponent} from "./training-session-builder-add/training-session-builder-add.component";
import {TrainingSessionService} from "../../service/training-session.service";
import {Course} from "../../model/course";
import {FileFormatterService} from "../../service/file-formatter.service";

@Component({
  selector: 'app-training-session-builder',
  templateUrl: './training-session-builder.component.html',
  styleUrls: ['./training-session-builder.component.css']
})

export class TrainingSessionBuilderComponent implements OnInit {
  public trainingSession: TrainingSession = {description: "", name: ""};
  public trainingSessions: TrainingSession[] = [];
  public id: number;

  private fileName: string = "";
  private selectedFile: any = {};

  constructor(
              private trainingService: TrainingSessionService,
              private fileService: FileFormatterService,
              private router: Router,
              public dialog: MatDialog,
              private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    this.trainingSession.courseId = this.id;
  }

  ngOnInit(): void {

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  add(): void {
    const requestData = this.fileService.generateFormData(
      'trainingSession',
      this.trainingSession,
      this.selectedFile,
      this.fileName);

    this.trainingService.create(requestData).subscribe((response) => {
      if (response.status === 200) {
        this.trainingSessions.push(Object.assign({}, this.trainingSession));
        console.log('Image uploaded successfully');
      } else {
        console.log('Image not uploaded successfully');
      }
    });
  }

  delete(id: number | undefined, i: number) {
    if (id != null) {
      this.trainingService.delete(id).subscribe(resp => {
        this.trainingSessions.splice(i, 1);
      })
    }
  }
}
