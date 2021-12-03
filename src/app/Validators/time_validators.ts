import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export function OneDayEventValidator(group: FormGroup): ValidationErrors | null {

  let valid = true;

  const startDate = new Date(group.get('startdate')?.value);
  const endDate = new Date(group.get('enddate')?.value);

  if (startDate.getDate() === endDate.getDate()) {
    const startTime = group.get('starttime')?.value;
    const endTime = group.get('endtime')?.value;
    valid = startTime < endTime || !startTime || !endTime;
  }

  return valid ? null : {one_day_event_invalid: true};
}
