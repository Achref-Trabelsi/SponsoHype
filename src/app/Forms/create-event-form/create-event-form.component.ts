import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateValidator, EventDurationValidator} from '../../Validators/date_validators';
import {CrudService} from '../../services/crud.service';
import {BASE_URL} from '../../Globals/variables';
import {OneDayEventValidator} from '../../Validators/time_validators';


@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent implements OnInit {

  formGroup: FormGroup;
  urlPostEvent = BASE_URL + '/projets';

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    // @ts-ignore
    this.formGroup = this.fb.group({
        name: ['', Validators.required],
        startdate: ['', Validators.compose([Validators.required, DateValidator])],
        starttime: ['', Validators.required],
        enddate: ['', Validators.compose([Validators.required, DateValidator])],
        endtime: ['', Validators.required],
        newdomaine: [''],
        domaine: ['', Validators.required],
        place: ['', Validators.required],
        details: ['', Validators.required],
        amount: ['', Validators.required],
      },
      {
        validator: [OneDayEventValidator, EventDurationValidator]
      });
  }

  get name(): AbstractControl | null {
    return this.formGroup.get('name');
  }

  // validators missing end date >= startdate and endtime > start time
  get startdate(): AbstractControl | null {
    return this.formGroup.get('startdate');
  }

  get starttime(): AbstractControl | null {
    return this.formGroup.get('starttime');
  }

  get enddate(): AbstractControl | null {
    return this.formGroup.get('enddate');
  }

  get endtime(): AbstractControl | null {
    return this.formGroup.get('endtime');
  }

  get newdomaine(): AbstractControl | null {
    return this.formGroup.get('newdomaine');
  }

  get domaine(): AbstractControl | null {
    return this.formGroup.get('domaine');
  }

  get place(): AbstractControl | null {
    return this.formGroup.get('place');
  }

  get details(): AbstractControl | null {
    return this.formGroup.get('details');
  }

  get amount(): AbstractControl | null {
    return this.formGroup.get('amount');
  }

  ngOnInit(): void {
  }

  addI(): void {
    const div1 = document.createElement('div');
    // @ts-ignore
    div1.innerHTML = document.getElementById('newlinktpl').innerHTML;
    // @ts-ignore
    document.getElementById('newlink').appendChild(div1);
  }

  addE(): void {
    const div1 = document.createElement('div');
    // @ts-ignore
    div1.innerHTML = document.getElementById('newlinktplE').innerHTML;
    // @ts-ignore
    document.getElementById('newlinkE').appendChild(div1);
  }

  submit(): void {
    const content = '{"nom":"' + this.name?.value
      + '", "details":"' + this.details?.value
      + '", "montant":"' + this.amount?.value
      + '", "projetable": { '
      + '"DateDebut":"' + this.startdate?.value
      + ' ' + this.starttime?.value
      + '", "DateFin":"' + this.enddate?.value
      + ' ' + this.endtime?.value
      + '", "Domaine":"' + this.domaine?.value
      + '", "Lieu":"' + this.place?.value
      + '", "partenaire":"okay'
      + '", "partenaire_id": null'
      + '}' +
      '}';
    console.log(content);
    const jsonObject = JSON.parse(content);
    console.log(jsonObject);
    this.crudService.post(this.urlPostEvent, jsonObject).subscribe((res: any) => console.log(res));
    this.formGroup.reset();
  }

  logName(): void {
    console.log(this.endtime?.value);
  }

  logMessage(): void {
    console.log('ok');
  }

  logDate(): void {
    console.log(this.formGroup);
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
