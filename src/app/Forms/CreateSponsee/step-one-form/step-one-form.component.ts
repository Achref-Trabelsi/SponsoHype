import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css']
})
export class StepOneFormComponent implements OnInit {
  formGroup: FormGroup;
  disabled: boolean | undefined;
  selectedFile = null;
  selectedCover = null;
  logo: string = '';
  cover: string = '';
  filesTosend: FileList | null = null;

  @Output() notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      type: ['', Validators.required],
      uni: [''],
      name: ['', Validators.required],
      slogan: ['', Validators.required],
    });
  }

  get type(): AbstractControl | null {
    return this.formGroup.get('type');
  }

  get uni(): AbstractControl | null {
    return this.formGroup.get('uni');
  }

  get name(): AbstractControl | null {
    return this.formGroup.get('name');
  }

  get slogan(): AbstractControl | null {
    return this.formGroup.get('slogan');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
      this.notify.emit(this.formGroup);
  }

  logMessage(): void {
    console.log(this.uni);
  }

  logType(): void {
    console.log(this.type?.value);
    if (this.type?.value === 'Organization') {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  onFileSelected(event: any): void{

    this.selectedFile = event.target.files[0];
    // @ts-ignore
    this.logo = this.selectedFile.name;
    this.filesTosend = this.selectedFile;
  }



  onCoverSelected(event: any): void{
    this.selectedCover = event.target.files[0];
    // @ts-ignore
    this.cover = this.selectedCover.name;

    this.filesTosend = this.selectedCover;
  }
}
