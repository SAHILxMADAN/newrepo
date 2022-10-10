import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './component/all-employees/all-employees.component';
import { CovidResponceFormComponent } from './component/covid-responce-form/covid-responce-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:AllEmployeesComponent},
  {path:'covid-responce-form',component:CovidResponceFormComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
