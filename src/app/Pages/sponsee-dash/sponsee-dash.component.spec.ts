import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponseeDashComponent } from './sponsee-dash.component';

describe('SponseeDashComponent', () => {
  let component: SponseeDashComponent;
  let fixture: ComponentFixture<SponseeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponseeDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponseeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
