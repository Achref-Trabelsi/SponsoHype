import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export function conformPassword(group: FormGroup): ValidationErrors | null {

  const password = group.get('password')?.value;
  const cpassword = group.get('cpassword')?.value;

  const valid = !password || !cpassword || password === cpassword;
  return valid ? null : {password_invalid: true};
}
