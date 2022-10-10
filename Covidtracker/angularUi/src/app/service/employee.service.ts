import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { Victimsdto } from '../model/victimdto.model';
import { Victims } from '../model/victims.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  insertVictim(victim: Victims):Observable<any> {
    return this.http.post<any>("http://localhost:7667/victim/insert",victim);
  }

  getAllVictims() :Observable<Victims[]>{
    return this.http.get<Victims[]>("http://localhost:7667/victims/all");
  }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:7667/employee/get/all");
  }

  insertVictimDto(victimdto: Victimsdto):Observable<any> {
    return this.http.post<any>("http://localhost:7667/victimdto/insert",victimdto);
  }

}
