import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-reactive-form',
  templateUrl: './course-reactive-form.component.html',
  styleUrls: ['./course-reactive-form.component.scss']
})
export class CourseReactiveFormComponent implements OnInit {
  courseForm: FormGroup = this._fb.group({
    title: ['', Validators.required],
    instructor: ['', Validators.required],
    isAvailable: [false]
  })
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup){
    console.log(form);
  }

}
