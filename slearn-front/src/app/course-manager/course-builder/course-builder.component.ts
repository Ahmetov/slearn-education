import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course";
import {CourseService} from "../../service/course.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FileFormatterService} from "../../service/file-formatter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-builder',
  templateUrl: './course-builder.component.html',
  styleUrls: ['./course-builder.component.css']
})
export class CourseBuilderComponent implements OnInit {

  public course: Course = {description: "", name: ""};
  private fileName: string = "";
  private selectedFile: any = {};

  constructor(private courseService: CourseService,
              private fileService: FileFormatterService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  //TODO если файл не выбран показывается ошибка
  saveFile() {
    const requestData = this.fileService.generateFormData(
      'course',
      this.course,
      this.selectedFile,
      this.fileName)

    this.courseService.create(requestData).subscribe((response) => {
        if (response.status === 200) {
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
    );
    this.router.navigate(['/training-session-builder'])
  }
}
