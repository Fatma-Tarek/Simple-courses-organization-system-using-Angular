import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http: HttpClient) { }
  getCourses(params?){
   return this._http.get(`${environment.baseUrl}/courses`, {params});
  }

  getCoursesById(id){
    return this._http.get(`${environment.baseUrl}/courses/${id}`);
   }
}
