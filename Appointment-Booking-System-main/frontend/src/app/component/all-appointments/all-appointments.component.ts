import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
  item:Appointment[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllAppointment().subscribe(data=>{
      this.item=data;
    })
  }

}
