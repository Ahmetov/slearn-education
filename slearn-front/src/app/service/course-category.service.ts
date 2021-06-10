import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lecture} from "../model/lecture";
import {environment} from "../../environments/environment";
import {CourseCategory} from "../model/course.category";

const URL = `${environment.apiUrl} + /lectures`;

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(URL);
  }

  create(category: CourseCategory): Observable<any> {
    return this.http.post<CourseCategory>(URL, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + `/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(URL + `/${id}`);
  }

  update(category: CourseCategory): Observable<any> {
    return this.http.put(URL, category);
  }
}
