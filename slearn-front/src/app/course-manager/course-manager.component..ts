import { Component, OnInit } from '@angular/core';
import {Course} from "../model/course";
import {CourseService} from "../service/course.service";

@Component({
  selector: 'app-course-builder',
  templateUrl: './course-manager.component..html',
  styleUrls: ['./course-manager.component.css']
})
export class CourseManagerComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(resp => {
      this.courses = resp;
      resp.forEach((d: any) => {
        let course = d;
        if (d.image != null) {
          let retrieveResonse = d.image.data;
          course.image = 'data:image/jpg;base64,' + retrieveResonse;
        }
      });
    }, error => {
      console.log(error)
    });
  }

  delete(id: number | undefined, i: number) {
    if (id != null) {
      this.courseService.delete(id).subscribe(resp => {
        this.courses.splice(i, 1);
      })
    }
  }
}
