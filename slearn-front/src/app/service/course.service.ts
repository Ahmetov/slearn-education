import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseCategory} from "../model/course.category";
import {environment} from "../../environments/environment";
import {Course} from "../model/course";

const URL = `${environment.apiUrl}/course`;

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(URL);
  }

  create(course: Course): Observable<any> {
    return this.http.post<Course>(URL, course);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + `/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(URL + `/${id}`);
  }

  update(course: Course): Observable<any> {
    return this.http.put(URL, course);
  }
}
