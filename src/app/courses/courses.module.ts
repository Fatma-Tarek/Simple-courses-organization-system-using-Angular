import { CoursesService } from './services/courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item/course-item.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesDetailsComponent,
    CoursesFormComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ],
 // providers : [CoursesService]
})
export class CoursesModule { }
