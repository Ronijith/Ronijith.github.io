import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  hide = true;

  get f() { return this.form.controls; }

  form!: FormGroup;
  signup() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    alert('SUCCESSFULLY REGISTERED)\n\n' + JSON.stringify(this.form.value, null, 6));
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }
}
export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password')!.value;
    if (AC.get('confirmPassword')!.touched || AC.get('confirmPassword')!.dirty) {
      let verifyPassword = AC.get('confirmPassword')!.value;

      if (password != verifyPassword) {
        AC.get('confirmPassword')!.setErrors({ MatchPassword: true })
      } else {
        return
      }
    }
  }
}
