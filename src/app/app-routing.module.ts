import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventcalComponent } from './eventcal/eventcal.component';
import { EventsComponent } from './events/events.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuardGuard } from './role-guard.guard';
import { ShortcodeComponent } from './shortcode/shortcode.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
 
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'eventscal',
    component: EventcalComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery1',
    component: Gallery1Component
  },
  {
    path: 'gallery2',
    component: Gallery2Component
  },
  {
    path: 'typo',
    component: TypographyComponent
  },
  {
    path: 'short',
    component: ShortcodeComponent
  },
  {
    path: 'contact1',
    component: ContactComponent
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [RoleGuardGuard]
    // hasRole : [AuthGuard]
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate : [AuthGuard]
  },  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
