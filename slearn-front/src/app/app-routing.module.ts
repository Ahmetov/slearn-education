import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./security/auth/auth.component";
import {RegistrationComponent} from "./security/registration/registration.component";
import {UserComponent} from "./user/user.component";
import {AuthGuardService} from "./helper/auth-guard.service";
import {CourseCategoryManagerComponent} from "./course-category-manager/course-category-manager.component";
import {CourseManagerComponent} from "./course-manager/course-manager.component.";
import {CourseBuilderComponent} from "./course-manager/course-builder/course-builder.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {TrainingSessionBuilderComponent} from "./course-manager/training-session-builder/training-session-builder.component";
import {TrainingSessionContentBuilderComponent} from "./course-manager/training-session-content-builder/training-session-content-builder.component";
import {TrainingSessionViewComponent} from "./course-manager/training-session/training-session-view/training-session-view.component";
import {CourseComponent} from "./course/course.component";
import {LectureViewDetailsComponent} from "./lecture/lecture-view/lecture-view-details/lecture-view-details.component";
import {LectureViewComponent} from "./lecture/lecture-view/lecture-view.component";
import {LectureComponent} from "./lecture/lecture.component";
import {LectureEditComponent} from "./lecture/lecture-edit/lecture-edit.component";
import {TrainingSessionComponent} from "./course/training-session/training-session.component";
import {TrainingSessionContentComponent} from "./course/training-session-content/training-session-content.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'lectures/manage', component: LectureComponent, canActivate: [AuthGuardService]},
  {path: 'lectures/manage/:id', component: LectureEditComponent, canActivate: [AuthGuardService]},
  {path: 'courses', component: CourseComponent, canActivate: [AuthGuardService]},
  {path: 'courses/:id', component: TrainingSessionComponent, canActivate: [AuthGuardService]},
  {path: 'training/:id', component: TrainingSessionContentComponent, canActivate: [AuthGuardService]},
  {path: 'users', component: UserComponent, canActivate: [AuthGuardService]},
  {path: 'lectures', component: LectureViewComponent, canActivate: [AuthGuardService]},
  {path: 'lectures/:id', component: LectureViewDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'category-manager', component: CourseCategoryManagerComponent, canActivate: [AuthGuardService]},
  {path: 'course-manager', component: CourseManagerComponent, canActivate: [AuthGuardService]},
  {path: 'course-builder', component: CourseBuilderComponent, canActivate: [AuthGuardService]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: 'training-session-builder/:id', component: TrainingSessionBuilderComponent, canActivate: [AuthGuardService]},
  {path: 'training-session-view/:id', component: TrainingSessionViewComponent, canActivate: [AuthGuardService]},
  {path: 'training-session-content-builder/:id', component: TrainingSessionContentBuilderComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
