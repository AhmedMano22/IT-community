import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
/* pay Cases */

active1 = true;
active2 = false;
active3 = false;

case1() {
  this.active1 = true;
  this.active2 = false;
  this.active3 = false;
}
case2() {
  this.active1 = false;
  this.active2 = true;
  this.active3 = false;
}
case3() {
  this.active1 = false;
  this.active2 = false;
  this.active3 = true;
}
opinionForm!: FormGroup;
openSubmitted = false;
showError = false;
creditForm!: FormGroup;
creditSubmitted = false;
walletForm!: FormGroup;
walletSubmitted = false;
tamaraForm!: FormGroup;
tamaraSubmitted = false;
secondStep: boolean = true;
thirdStep: boolean = false;

showCards = false;
constructor(private fb: FormBuilder) { }
ngOnInit(): void {
  this.opinionForm = new FormGroup({
    msg: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });
  this.creditForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    creditNumber: ['', [Validators.minLength(12), Validators.required]],
    endDate: ['', [Validators.required]],
    cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
  });
  this.walletForm = this.fb.group({
    amount: ['', [Validators.required]],
  });
  this.tamaraForm = this.fb.group({
    amount: ['', [Validators.required]],
  })
}

/* Steps */



submitOpinion() {
  this.showError = true;
  if(this.opinionForm.valid) {
    console.log(this.opinionForm.value);
    this.openSubmitted = true;
    this.showError = false;
  }
}

creditSubmit() {
  this.creditSubmitted = true;
  if(!this.creditForm.invalid) {
    this.secondStep = false;
    this.thirdStep = true;
    console.log(this.creditForm.value);
    this.creditSubmitted = false;
  }
}
walletSubmit() {
  this.walletSubmitted = true;
  if(!this.walletForm.invalid) {
    this.secondStep = false;
    this.thirdStep = true;
    console.log(this.walletForm.value);
    this.walletSubmitted = false;
  }
}
tamaraSubmit() {
  this.tamaraSubmitted = true;
  if(!this.tamaraForm.invalid) {
    this.secondStep = false;
    this.thirdStep = true;
    console.log(this.tamaraForm.value);
    this.tamaraSubmitted = false;
  }
}
}



