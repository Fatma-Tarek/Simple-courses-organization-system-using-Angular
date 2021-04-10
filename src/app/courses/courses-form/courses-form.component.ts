import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    console.log(form);
    if(form.valid){
     // value is  property in form
      const course = form.value;
      console.log(course);
    }
  }

}
