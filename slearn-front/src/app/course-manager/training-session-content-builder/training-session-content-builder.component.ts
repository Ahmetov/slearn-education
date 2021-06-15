import {Component, OnInit} from '@angular/core';
import {TrainingSessionContent} from "../../model/training.session.content";
import {TrainingSessionContentService} from "../../service/training-session-content.service";
import {ActivatedRoute} from "@angular/router";
import {FileFormatterService} from "../../service/file-formatter.service";

@Component({
  selector: 'app-training-session-content-builder',
  templateUrl: './training-session-content-builder.component.html',
  styleUrls: ['./training-session-content-builder.component.css']
})
export class TrainingSessionContentBuilderComponent implements OnInit {

  public trainingSessionContent: TrainingSessionContent = {content: "", subtitle: ""};
  public trainingSessionContents: TrainingSessionContent[] = [];
  public id: number;

  private fileName: string = "";
  private selectedFile: any = {};

  constructor(private trainingContentService: TrainingSessionContentService,
              private fileService: FileFormatterService,
              private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    this.trainingSessionContent.trainingId = this.id;
  }

  ngOnInit(): void {
    this.trainingContentService.getByTrainingSessionId(this.id).subscribe(resp => {
      this.trainingSessionContents = resp;
      resp.forEach((d: any) => {
        let training = d;
        if (d.image != null) {
          let retrieveResonse = d.image;
          training.image = 'data:image/jpg;base64,' + retrieveResonse;
        }
      });
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  add(): void {
    const requestData = this.fileService.generateFormData(
      'trainingSessionPart',
      this.trainingSessionContent,
      this.selectedFile,
      this.fileName);

    this.trainingContentService.create(requestData).subscribe((response) => {
      if (response.status === 200) {
        this.trainingSessionContents.push(Object.assign({}, this.trainingSessionContent));
        console.log('Image uploaded successfully');
      } else {
        console.log('Image not uploaded successfully');
      }
    });
  }

  delete(id: number | undefined, i: number) {
    if (id != null) {
      this.trainingContentService.delete(id).subscribe(resp => {
        this.trainingSessionContents.splice(i, 1);
      })
    }
  }
}
