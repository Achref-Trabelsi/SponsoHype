import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from './Pages/about-us/about-us.component';
import {HomeComponent} from './Pages/home/home.component';
import {AlleventsComponent} from './Pages/allevents/allevents.component';
import {SponseeDashComponent} from './Pages/sponsee-dash/sponsee-dash.component';
import {CreateEventComponent} from './Pages/sponsee-dash/create-event/create-event.component';
import {CreateEventFormComponent} from './Forms/create-event-form/create-event-form.component';
import {LoginComponent} from './Pages/login/login.component';
import {SignUpComponent} from './Pages/sign-up/sign-up.component';
import {SignUpSponseeComponent} from './Pages/sign-up-sponsee/sign-up-sponsee.component';
import {StepOneFormComponent} from './Forms/CreateSponsee/step-one-form/step-one-form.component';
import {StepTwoFormComponent} from './Forms/CreateSponsee/step-two-form/step-two-form.component';
import {StepThreeFormComponent} from './Forms/CreateSponsee/step-three-form/step-three-form.component';
import {StepFourFormComponent} from './Forms/CreateSponsee/step-four-form/step-four-form.component';
import {AllEventsComponent} from "./Pages/sponsee-dash/all-events/all-events.component";
import {ProfileComponent} from "./Pages/sponsee-dash/profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'sign-up-sponsee',
    component: SignUpSponseeComponent
  },
  {
    path: 'all-events',
    component: AlleventsComponent

  },
  {
    path: 'about-us',
    component: AboutUsComponent

  },
  {
    path: 'event-form',
    component: CreateEventFormComponent
  },
  {
    path: 'sponsee-dashboard',
    component: SponseeDashComponent,
    children: [
      {
        path: 'create-event',
        component: CreateEventComponent
      },
      {
        path: 'all-events',
        component: AllEventsComponent
      },
      {
        path: 'profile' ,
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up-sponsor',
    component: SignUpComponent
  },
  {
    path: 'step-one',
    component: StepOneFormComponent
  },
  {
    path: 'step-two',
    component: StepTwoFormComponent
  },
  {
    path: 'step-three',
    component: StepThreeFormComponent
  },
  {
    path: 'step-four',
    component: StepFourFormComponent
  }
];

// @ts-ignore

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
