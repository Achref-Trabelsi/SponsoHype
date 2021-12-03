import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css']
})
export class StepTwoFormComponent implements OnInit {

  formGroup: FormGroup;
  @Output() notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      description: ['', Validators.required],
      newdomaine: [''],
      domaine: ['', Validators.required],
    });
  }

  get description(): AbstractControl | null {
    return this.formGroup.get('description');
  }

  get newdomaine(): AbstractControl | null {
    return this.formGroup.get('newdomaine');
  }

  get domaine(): AbstractControl | null {
    return this.formGroup.get('domaine');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.notify.emit(this.formGroup);
  }

  logDomain(): void {
    if (this.domaine?.value === 'Add') {
      // @ts-ignore
      document.getElementById('adding').style.display = 'block';
    } else {
      // @ts-ignore
      document.getElementById('adding').style.display = 'none';
    }
  }

}
