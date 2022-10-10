import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { Victimsdto } from 'src/app/model/victimdto.model';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-covid-responce-form',
  templateUrl: './covid-responce-form.component.html',
  styleUrls: ['./covid-responce-form.component.css']
})
export class CovidResponceFormComponent implements OnInit {
  status:boolean = true;
  employee:Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  checkDate(covidForm:NgForm){
    let dateToBeCheckOut = new Date(covidForm.value.affectedDate);
    let today = new Date();
    if (dateToBeCheckOut >= today){
      this.status = true;
    }
    else{
      this.status = false;
    }
  }

  onFormSubmit(covidForm:NgForm){

    let victimdto:Victimsdto = {
      employeeid:covidForm.value.id,
      affectedDate:covidForm.value.affectedDate,
      dosages:covidForm.value.dosages,
      sickLeaves:14,
      funds:10000.00,
      status:"Under Recovery"
    }

    this.employeeService.insertVictimDto(victimdto).subscribe();
  }
}
