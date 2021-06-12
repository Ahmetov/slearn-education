import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course";
import {CourseService} from "../../service/course.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-course-builder',
  templateUrl: './course-builder.component.html',
  styleUrls: ['./course-builder.component.css']
})
export class CourseBuilderComponent implements OnInit {

  public course: Course = {description: "", name: ""};
  private fileName: string = "";
  private selectedFile: any = {};

  constructor(private courseService: CourseService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  save() {
    this.courseService.create(this.course);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  saveFile() {
    const uploadImageData = new FormData();
    uploadImageData.append('file', <File>this.selectedFile, this.fileName);
    this.http.post('http://localhost:8080/course/file', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
      );
  }
}
