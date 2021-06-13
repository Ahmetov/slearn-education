import { Component, OnInit } from '@angular/core';
import {CourseService} from "../service/course.service";
import {Course} from "../model/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(resp => {
      this.courses = resp;
    }, error => {
      console.log(error)
    });
  }

}
