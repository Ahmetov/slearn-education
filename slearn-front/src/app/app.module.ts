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
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProvider, authErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
