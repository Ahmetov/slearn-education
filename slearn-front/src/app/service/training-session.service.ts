import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TrainingSession} from "../model/training.session";

const URL = `${environment.apiUrl}/training-session`;

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(URL);
  }

  create(trainingSession: FormData): Observable<any> {
    return this.http.post(
      URL + '/file',
      trainingSession, {
        observe: 'response'
      });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + `/${id}`);
  }

  clear(id: number): Observable<any> {
    return this.http.post(URL + `/clean/${id}`, null);
  }

  getById(id: number): Observable<any> {
    return this.http.get(URL + `/${id}`);
  }

  getByCourseId(id: number): Observable<any> {
    return this.http.get(URL + `/course/${id}`);
  }

  update(trainingSession: TrainingSession): Observable<any> {
    return this.http.put(URL, trainingSession);
  }
}
