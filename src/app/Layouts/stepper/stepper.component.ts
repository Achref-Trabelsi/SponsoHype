import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {CrudService} from '../../services/crud.service';
import {BASE_URL} from '../../Globals/variables';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepperComponent implements OnInit {

  valid1 = false;
  valid2 = false;
  valid3 = false;
  formGroups: FormGroup[] = [];
  urlPostSponsee = BASE_URL + '/register';

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit1(event: FormGroup): void {
    if (event.valid) {
      this.valid1 = true;
      // @ts-ignore
      this.formGroups[0] = event;
      console.log('form 1 is valid');
    }
  }

  submit2(event: FormGroup): void {
    if (event.valid) {
      this.valid2 = true;
      this.formGroups[1] = event;
      console.log('form 2 is valid');
    }
  }

  submit3(event: FormGroup): void {
    if (event.valid) {
      this.valid3 = true;
      this.formGroups[2] = event;
      console.log('form 3 is valid');
      this.onSubmit();
    } else {
      console.log(event);
    }
  }

  onSubmit(): void {
    if (this.valid1 && this.valid2 && this.valid3) {

      const content = '{"name":"' + this.formGroups[0].get('name')?.value
        + '", "email":"' + this.formGroups[2].get('email')?.value
        + '", "password":"' + this.formGroups[2].get('password')?.value
        + '", "password_confirmation":"' + this.formGroups[2].get('cpassword')?.value
        + '", "phone":"' + this.formGroups[2].get('phone')?.value
        + '", "RIB":"' + this.formGroups[2].get('rib')?.value
        + '", "university_name":"' + this.formGroups[0].get('uni')?.value
        + '", "role_id": 2'
        + ',  "organization_type_id": 1 '
        + ', "event_domain_id": 2'
        + ', "description":"' + this.formGroups[1].get('description')?.value
        + '"}';

      console.log(content);
      const jsonObject = JSON.parse(content);
      console.log(jsonObject);
      this.authService.register(jsonObject);

      console.log('valid form');
      this.router.navigate(['/']);
    } else {
      console.log('non valid form');
    }
  }
}
