import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSponseeComponent } from './sign-up-sponsee.component';

describe('SignUpSponseeComponent', () => {
  let component: SignUpSponseeComponent;
  let fixture: ComponentFixture<SignUpSponseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpSponseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSponseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
