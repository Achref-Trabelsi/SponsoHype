import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.formGroup = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  get email(): AbstractControl | null { return this.formGroup.get('email'); }
  get password(): AbstractControl | null { return this.formGroup.get('password'); }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(this.email, this.password);
    this.authService.login(this.email?.value , this.password?.value);
    this.formGroup.reset();
    this.router.navigate(['/']);
  }

}
