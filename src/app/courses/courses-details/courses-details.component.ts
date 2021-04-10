import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit, OnDestroy {
  id;
  private _routeParamsSub: Subscription;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
   this._routeParamsSub = this._route.paramMap.subscribe(paramMap =>{
      console.log(paramMap);
      // paramMap.has('id') return true or false
      this.id = paramMap.has('id') ? paramMap.get('id') : null ;
    });
  }
  ngOnDestroy(): void{
    this._routeParamsSub.unsubscribe();
  }

}
