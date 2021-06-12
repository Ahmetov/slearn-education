import { Component, OnInit } from '@angular/core';
import {CourseCategoryService} from "../service/course-category.service";
import {CourseCategory} from "../model/course.category";

@Component({
  selector: 'app-cource-category-manager',
  templateUrl: './course-category-manager.component.html',
  styleUrls: ['./course-category-manager.component.css']
})
export class CourseCategoryManagerComponent implements OnInit {

  public category: CourseCategory = {description: "", name: ""};
  public categories: CourseCategory[] = [];

  constructor(private categoryService: CourseCategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log(error);
    })
  }

  save(): void {
    console.log(this.category.description);
    this.categoryService.create(this.category).subscribe(resp => {
      this.categories.push(this.category);
    })
  }

  delete(id: number | undefined, i: number) {
    if (id !== undefined) {
    this.categoryService.delete(id).subscribe(resp => {
      this.categories.splice(i, 1);
    })}
  }

  update(id: number | undefined) {
    if (id !== undefined) {

    }
  }
}
