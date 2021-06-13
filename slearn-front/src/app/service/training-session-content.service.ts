import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainingSession} from "../model/training.session";
import {environment} from "../../environments/environment";

const URL = `${environment.apiUrl}/training-session-content`;

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionContentService {

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

  getById(id: number): Observable<any> {
    return this.http.get(URL + `/${id}`);
  }

  getByTrainingSessionId(id: number): Observable<any> {
    return this.http.get(URL + `/trainings-session/${id}`);
  }

  update(trainingSession: TrainingSession): Observable<any> {
    return this.http.put(URL, trainingSession);
  }
}
