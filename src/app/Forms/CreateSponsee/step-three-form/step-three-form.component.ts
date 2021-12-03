import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {conformPassword} from '../../../Validators/conformPassword';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrls: ['./step-three-form.component.css']
})
export class StepThreeFormComponent implements OnInit {

  formGroup: FormGroup;
  @Output() notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        rib: ['', Validators.required],
        password: ['', Validators.required],
        cpassword: ['', Validators.required],
        phone: ['', Validators.required],
      },
      {
        validator: [conformPassword]
      });
  }

  onSubmit(): void {
    this.notify.emit(this.formGroup);
  }

  get name(): AbstractControl | null {
    return this.formGroup.get('name');
  }

  get rib(): AbstractControl | null {
    return this.formGroup.get('rib');
  }

  get phone(): AbstractControl | null {
    return this.formGroup.get('phone');
  }

  get email(): AbstractControl | null {
    return this.formGroup.get('email');
  }

  get password(): AbstractControl | null {
    return this.formGroup.get('password');
  }

  get cpassword(): AbstractControl | null {
    return this.formGroup.get('cpassword');
  }


  ngOnInit(): void {
  }

  submit(): void {
    const sponsee3 = {
      name: this.name?.value,
      email: this.email?.value,
      password: this.password?.value,
      confirm_password: this.cpassword?.value,
      rib: this.rib?.value,
      phone: this.phone?.value,
    };

    if (this.formGroup.valid) {
      console.log('Sponsee third form is valid', JSON.stringify(sponsee3));
    }
  }
}
