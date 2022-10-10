import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  employeeArr:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data=>{
      this.employeeArr=data;
    })

  }

}
