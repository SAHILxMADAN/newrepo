import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAppointmentsComponent } from './component/all-appointments/all-appointments.component';
import { BookingConfirmationComponent } from './component/booking-confirmation/booking-confirmation.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PatientAppointmentComponent } from './component/patient-appointment/patient-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAppointmentsComponent,
    BookingConfirmationComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    PatientAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }