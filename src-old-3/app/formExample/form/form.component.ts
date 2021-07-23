import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', Validators.compose([Validators.required, Validators.email])],
      phoneNo: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)])],
      address: ['', Validators.required],
      active: ['']

    });


  }

  createStudent() {
    console.log(this.studentForm.controls.name.value);
  }

}
