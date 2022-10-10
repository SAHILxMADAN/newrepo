import { Component, OnInit } from '@angular/core';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  victimsArr:Victims[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllVictims().subscribe(data=>{
      this.victimsArr = data;
    });
  }

}
