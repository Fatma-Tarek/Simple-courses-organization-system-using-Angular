import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';




const routes: Routes = [
 // { path: '', component: CoursesComponent }
  //============= redirection ====================//
  // {
  //   path: '',
  //   redirectTo: 'list'
  // },
  //============ children components ===========//
 { 
   path: '',
   component: CoursesComponent ,
   children: [
    { path: '', component: CoursesListComponent},
    //{ path: 'new',  component: CoursesFormComponent},
    { path: 'new',  component: CourseReactiveFormComponent},
    { path: ':id', component: CoursesDetailsComponent }
   ]
 },
//  {
//    path: '**',
//    redirectTo: ''
//  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
