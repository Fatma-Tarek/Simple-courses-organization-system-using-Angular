import { CoursesService } from './../services/courses.service';
import { Course } from '../models/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Course[];
  searchTerm: string;
  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
    this._coursesService.getCourses().subscribe((res: any) =>{
        this.courses = res.data;
        console.log(res)
    });
  }

}
