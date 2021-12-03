import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export function DateValidator(control: AbstractControl): ValidationErrors | null {

  const today = new Date();
  const entereddate = new Date(control?.value);

  return today < entereddate ? null : {date_invalid: true};
}

export function EventDurationValidator(group: FormGroup): ValidationErrors | null {

  const startDate = new Date(group.get('startdate')?.value);
  const endDate = new Date(group.get('enddate')?.value);

  return endDate >= startDate ? null : {duration_invalid: true};
}
