import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss'],
})
export class TargetsComponent {
  constructor(private fb: FormBuilder) {}

  inputData = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ];

  form = this.fb.group({
    targets: this.fb.array([]),
    conditions: this.fb.array([]),
    learners: this.fb.array([]),
  });

  //Targeted learners form controls
  get targets() {
    return this.form.get('targets') as FormArray;
  }

  addTarget() {
    this.targets.push(
      this.fb.group({
        targetDesc: [''],
      })
    );
  }

  //Conditions to join course controls
  get conditions() {
    return this.form.get('conditions') as FormArray;
  }

  addPreRequesties() {
    this.conditions.push(
      this.fb.group({
        preRequesties: [''],
      })
    );
  }

  //Qualified learners form controls
  get learners() {
    return this.form.get('learners') as FormArray;
  }

  addQualifiedLearnerDesc() {
    this.learners.push(
      this.fb.group({
        qualifiedLearner: [''],
      })
    );
  }
}
