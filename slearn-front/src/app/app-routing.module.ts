import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./security/auth/auth.component";
import {LectureComponent} from "./lecture/lecture.component";
import {RegistrationComponent} from "./security/registration/registration.component";
import {UserComponent} from "./user/user.component";
import {AuthGuardService} from "./helper/auth-guard.service";
import {LectureEditComponent} from "./lecture/lecture-edit/lecture-edit.component";
import {LectureViewComponent} from "./lecture/lecture-view/lecture-view.component";
import {LectureViewDetailsComponent} from "./lecture/lecture-view/lecture-view-details/lecture-view-details.component";
import {CourseCategoryManagerComponent} from "./course-category-manager/course-category-manager.component";
import {CourseManagerComponent} from "./course-manager/course-manager.component.";
import {CourseBuilderComponent} from "./course-manager/course-builder/course-builder.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'lectures/manage', component: LectureComponent, canActivate: [AuthGuardService]},
  {path: 'lectures/manage/:id', component: LectureEditComponent, canActivate: [AuthGuardService]},
  {path: 'users', component: UserComponent, canActivate: [AuthGuardService]},
  {path: 'lectures', component: LectureViewComponent, canActivate: [AuthGuardService]},
  {path: 'lectures/:id', component: LectureViewDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'category-manager', component: CourseCategoryManagerComponent, canActivate: [AuthGuardService]},
  {path: 'course-manager', component: CourseManagerComponent, canActivate: [AuthGuardService]},
  {path: 'course-builder', component: CourseBuilderComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'lectures', pathMatch: 'full'}
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
