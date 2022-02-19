import { Component, VERSION } from '@angular/core';
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
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      listValues: this.fb.array([]),
    });
  }
  get listValues(): FormArray {
    return this.form.get('listValues') as FormArray;
  }

  addListValue() {
    this.listValues.push(new FormControl(null));
  }

  remoteListValue(index) {
    this.listValues.removeAt(index);
  }
}
