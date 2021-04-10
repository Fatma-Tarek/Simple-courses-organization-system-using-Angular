import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesDetailsComponent,
    CoursesFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }
