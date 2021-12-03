import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {conformPassword} from '../../Validators/conformPassword';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {CrudService} from '../../services/crud.service';
import {BASE_URL} from '../../Globals/variables';
import {Domain} from '../../Models/Domain';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  formGroup: FormGroup;

  domainsUrl = BASE_URL + '/domains';
  // domains: Domain[] = [];
  dom: Domain[] = [];
  domains: string[] = [];
  interests: string[] = [];
  allInterests: string[] = ['IT', 'Robotics', 'Art'];
  filteredDomains: Observable<string[]> | undefined;
  filteredInterests: Observable<string[]> | undefined;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('interestInput') interestInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('autoChip') matAutocomplete: MatAutocomplete | undefined;

  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private crudService: CrudService,
              private router: Router) {

    this.formGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        domaine: ['', Validators.required],
        interest: [''],
        description: ['', Validators.required],
        password: ['', Validators.required],
        cpassword: ['', Validators.required] // missing conform password
      },
      {
        validator: [conformPassword]
      });
  }

  ngOnInit(): void {
    const resp = this.crudService.get(this.domainsUrl).subscribe(
      data => {
        console.log(data.roles.length);
        for (let i = 0; i < data.roles.length; i++) {
          this.domains[i] = data.roles[i].name;
        }
        console.log(this.domains);
        this.filteredDomains = this.domaine?.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value, this.domains))
          );

        this.filteredInterests = this.interest?.valueChanges.pipe(
          startWith(null),
          map((value: string | null) => value ? this._filter(value, this.allInterests) : this.allInterests.slice()));
      }
    );

  }

  private _filter(value: string, source: string[]): string[] {
    const filterValue = value.toLowerCase();

    return source.filter(option => option.toLowerCase().includes(filterValue));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;

    const value = (event.value || '').trim();
    // Add our interest
    if (value) {
      this.interests.push(value);
    }

    // Clear the input value
    if (input) {
      input.value = '';
    }
    this.interest?.setValue(null);
  }

  remove(chip: string): void {
    const index = this.interests.indexOf(chip);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.interests.push(event.option.viewValue);
    // @ts-ignore
    this.interestInput.nativeElement.value = '';
    this.interest?.setValue(null);
  }

  get name(): AbstractControl | null {
    return this.formGroup.get('name');
  }

  get domaine(): AbstractControl | null {
    return this.formGroup.get('domaine');
  }

  get email(): AbstractControl | null {
    return this.formGroup.get('email');
  }

  get interest(): AbstractControl | null {
    return this.formGroup.get('interest');
  }

  get description(): AbstractControl | null {
    return this.formGroup.get('description');
  }

  get password(): AbstractControl | null {
    return this.formGroup.get('password');
  }

  get cpassword(): AbstractControl | null {
    return this.formGroup.get('cpassword');
  }

  submit(): void {
    const sponsor = {
      name: this.name?.value,
      email: this.email?.value,
      password: this.password?.value,
      password_confirmation: this.cpassword?.value,
      role_id: 1,
      event_domain_id: 1,
      description: this.description?.value,
    };

    if (this.formGroup.valid) {
      console.log('form is valid', JSON.stringify(sponsor));
      // use authService to register
      // @ts-ignore
      this.authService.register(sponsor);
      // redirect to somewhere x)
      this.router.navigate(['/']);
    }

  }
}
