import { Course } from './../models/course.model';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'courseFilter',
    pure: true
})

export class CourseFilterPipe implements PipeTransform{
    constructor() { }
    transform(courses: Course[], searchTerm: string): Course[] {
        if (!courses || !searchTerm){
            return courses;
        }
        return courses.filter(course =>
            course.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );

    }
}
