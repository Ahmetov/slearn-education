import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "../material-module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LectureComponent} from './lecture/lecture.component';
import {LectureEditComponent} from './lecture/lecture-edit/lecture-edit.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthComponent} from './security/auth/auth.component';
import {RegistrationComponent} from './security/registration/registration.component';
import {AppRoutingModule} from './app-routing.module';
import {UserComponent} from './user/user.component';
import {authInterceptorProvider} from "./helper/auth-interceptor.service";
import {authErrorInterceptorProvider} from "./helper/error-interceptor.service";
import {UserEditComponent} from './user/user-edit/user-edit.component';
import { LectureViewComponent } from './lecture/lecture-view/lecture-view.component';
import { LectureViewDetailsComponent } from './lecture/lecture-view/lecture-view-details/lecture-view-details.component';
import { CourseCategoryManagerComponent } from './course-category-manager/course-category-manager.component';
import { CourseManagerComponent } from './course-manager/course-manager.component.';
import { CourseBuilderComponent } from './course-manager/course-builder/course-builder.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { TrainingSessionBuilderComponent } from './course-manager/training-session-builder/training-session-builder.component';
import { TrainingSessionContentBuilderComponent } from './course-manager/training-session-content-builder/training-session-content-builder.component';
import { TrainingSessionBuilderAddComponent } from './course-manager/training-session-builder/training-session-builder-add/training-session-builder-add.component';
import { TrainingSessionViewComponent } from './course-manager/training-session/training-session-view/training-session-view.component';
import { CourseComponent } from './course/course.component';
import { TrainingSessionComponent } from './course/training-session/training-session.component';
import { TrainingSessionContentComponent } from './course/training-session-content/training-session-content.component';
import { UserProfileEditComponent } from './user-profile/user-profile-edit/user-profile-edit.component';
import { TestBuilderComponent } from './course-manager/test-builder/test-builder.component';
import { TestComponent } from './course/test/test.component';
import { EnemySayModalComponent } from './course/test/enemy-say-modal/enemy-say-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    LectureEditComponent,
    NavigationComponent,
    NotFoundComponent,
    AuthComponent,
    RegistrationComponent,
    UserComponent,
    UserEditComponent,
    LectureViewComponent,
    LectureViewDetailsComponent,
    CourseCategoryManagerComponent,
    CourseManagerComponent,
    CourseBuilderComponent,
    UserProfileComponent,
    TrainingSessionBuilderComponent,
    TrainingSessionContentBuilderComponent,
    TrainingSessionBuilderAddComponent,
    TrainingSessionViewComponent,
    CourseComponent,
    TrainingSessionComponent,
    TrainingSessionContentComponent,
    UserProfileEditComponent,
    TestBuilderComponent,
    TestComponent,
    EnemySayModalComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatProgressBarModule
    ],
  providers: [authInterceptorProvider, authErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
