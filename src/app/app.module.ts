import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { TypographyComponent } from './typography/typography.component';
import { ShortcodeComponent } from './shortcode/shortcode.component';
import { ContactComponent } from './contact/contact.component';
import { EventcalComponent } from './eventcal/eventcal.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    DashboardComponent,
    HomeComponent,
    Gallery1Component,
    Gallery2Component,
    TypographyComponent,
    ShortcodeComponent,
    ContactComponent,
    EventcalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  ],
  
  providers: [AuthService, EventService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
