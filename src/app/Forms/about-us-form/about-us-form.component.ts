import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MailService} from '../../services/mail.service';

@Component({
  selector: 'app-about-us-form',
  templateUrl: './about-us-form.component.html',
  styleUrls: ['./about-us-form.component.css']
})
export class AboutUsFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private mailservice: MailService) {
    this.formGroup = this.fb.group({
    email : ['', Validators.compose([Validators.required, Validators.email])],
    message: ['', Validators.required]
  });
}

  get email(): AbstractControl | null { return this.formGroup.get('email'); }
  get message(): AbstractControl | null { return this.formGroup.get('message'); }

  ngOnInit(): void {
  }

  submit(): void{
    this.mailservice.postmail(this.email?.value, this.message?.value);
    this.formGroup.reset();
  }

  logEmail(): void{
    console.log(this.email);
  }

  logMessage(): void{
    console.log(this.message);
  }
}
