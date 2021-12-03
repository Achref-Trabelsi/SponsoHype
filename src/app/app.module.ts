import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AuthInterceptor} from './Interceptors/auth.interceptor';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './Layouts/nav-bar/nav-bar.component';
import {FooterComponent} from './Layouts/footer/footer.component';
import {AboutUsComponent} from './Pages/about-us/about-us.component';
import {HomeComponent} from './Pages/home/home.component';
import {AlleventsComponent} from './Pages/allevents/allevents.component';
import {AboutUsFormComponent} from './Forms/about-us-form/about-us-form.component';
import {SponseeDashComponent} from './Pages/sponsee-dash/sponsee-dash.component';
import {CreateEventComponent} from './Pages/sponsee-dash/create-event/create-event.component';
import {CreateEventFormComponent} from './Forms/create-event-form/create-event-form.component';
import {LoginComponent} from './Pages/login/login.component';
import {LogInFormComponent} from './Forms/log-in-form/log-in-form.component';
import {SignUpComponent} from './Pages/sign-up/sign-up.component';
import {SignUpFormComponent} from './Forms/sign-up-form/sign-up-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipInput, MatChipsModule} from '@angular/material/chips';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignUpSponseeComponent } from './Pages/sign-up-sponsee/sign-up-sponsee.component';
import { StepperComponent } from './Layouts/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MATERIAL_SANITY_CHECKS} from '@angular/material/core';
import { StepOneFormComponent } from './Forms/CreateSponsee/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './Forms/CreateSponsee/step-two-form/step-two-form.component';
import { StepThreeFormComponent } from './Forms/CreateSponsee/step-three-form/step-three-form.component';
import { StepFourFormComponent } from './Forms/CreateSponsee/step-four-form/step-four-form.component';
import { EventSearchPipe } from './Pipes/event-search.pipe';
import { AllEventsComponent } from './Pages/sponsee-dash/all-events/all-events.component';
import { ProfileComponent } from './Pages/sponsee-dash/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    AlleventsComponent,
    AboutUsFormComponent,
    SponseeDashComponent,
    CreateEventComponent,
    CreateEventFormComponent,
    LoginComponent,
    LogInFormComponent,
    SignUpComponent,
    SignUpFormComponent,
    SignUpSponseeComponent,
    StepperComponent,
    StepOneFormComponent,
    StepTwoFormComponent,
    StepThreeFormComponent,
    StepFourFormComponent,
    EventSearchPipe,
    AllEventsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    },
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
