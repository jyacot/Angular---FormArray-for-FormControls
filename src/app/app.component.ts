import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      listValues: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.addListValueArray(); // +1 elemente by default
  }

  get listValuesArray(): FormArray {
    return this.form.get('listValues') as FormArray;
  }

  addListValueArray() {
    this.listValuesArray.push(new FormControl(null));
  }

  remoteListValueArray(index) {
    this.listValuesArray.removeAt(index);
  }
}
