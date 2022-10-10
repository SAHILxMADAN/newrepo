import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { CovidResponceFormComponent } from './component/covid-responce-form/covid-responce-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AllEmployeesComponent } from './component/all-employees/all-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CovidResponceFormComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
