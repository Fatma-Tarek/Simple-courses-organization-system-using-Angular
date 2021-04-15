import { CoursesService } from './../services/courses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../models/course.model';
@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit, OnDestroy {
  id;
  private _routeParamsSub: Subscription;
  course: Course;
  constructor(private _route: ActivatedRoute,
              private _coursesService: CoursesService
    ) { }

  ngOnInit(): void {
   this._routeParamsSub = this._route.paramMap.subscribe(paramMap =>{
      console.log(paramMap);
      // paramMap.has('id') return true or false
      if (paramMap.has('id')){
        this._coursesService.getCoursesById(paramMap.get('id')).subscribe((res: any) => {
        this.course = res.data;
        })
            }
     // this.id = paramMap.has('id') ? paramMap.get('id') : null ;
    });
  }
  ngOnDestroy(): void{
    this._routeParamsSub.unsubscribe();
  }

}
