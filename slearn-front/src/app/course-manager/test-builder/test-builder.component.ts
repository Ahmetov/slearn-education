import { Component, OnInit } from '@angular/core';
import {TrainingSessionContent} from "../../model/training.session.content";
import {FileFormatterService} from "../../service/file-formatter.service";
import {ActivatedRoute} from "@angular/router";
import {TestService} from "../../service/test.service";

@Component({
  selector: 'app-test-builder',
  templateUrl: './test-builder.component.html',
  styleUrls: ['./test-builder.component.css']
})
export class TestBuilderComponent implements OnInit {

  public trainingSessionContent: TrainingSessionContent = {content: "", subtitle: ""};
  public trainingSessionContents: TrainingSessionContent[] = [];
  public id: number;
  private fileName: string = "";
  private selectedFile: any = {};

  constructor(private testService: TestService,
              private fileService: FileFormatterService,
              private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    this.trainingSessionContent.trainingId = this.id;
  }

  ngOnInit(): void {

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  save() {
    const requestData = this.fileService.generateFormData(
      'test',
      this.trainingSessionContent,
      this.selectedFile,
      this.fileName);

    // this.trainingContentService.create(requestData).subscribe((response) => {
    //   if (response.status === 200) {
    //     this.trainingSessionContents.push(Object.assign({}, this.trainingSessionContent));
    //     console.log('Image uploaded successfully');
    //   } else {
    //     console.log('Image not uploaded successfully');
    //   }
    // });
  }

  add() {

  }
}
