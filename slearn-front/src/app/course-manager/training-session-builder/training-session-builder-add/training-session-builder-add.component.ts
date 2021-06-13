import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {User} from "../../../model/user";
import {TrainingSession} from "../../../model/training.session";

@Component({
  selector: 'app-training-session-builder-add',
  templateUrl: './training-session-builder-add.component.html',
  styleUrls: ['./training-session-builder-add.component.css']
})
export class TrainingSessionBuilderAddComponent implements OnInit {

  public trainingSession: TrainingSession = {description: "", name: ""};
  private selectedFile: any;
  private fileName: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TrainingSession[]) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  add() {
    this.data.push(this.trainingSession);
  }
}
