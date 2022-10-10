import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment.model';
import { Doctor } from 'src/app/model/doctor.model';
import { Slots } from 'src/app/model/slots.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  docArr:Doctor[];
  slotArr:Slots[];
  tempArr:Slots[];
  appointment:Appointment;
  constructor(private patientService:PatientService,private router:Router) { }
  
  ngOnInit(): void {
    this.patientService.allDoctors().subscribe(data=>{
      this.docArr=data;
});

this.patientService.allSlots().subscribe(data=>{
 this.slotArr=data;
 this.tempArr=this.slotArr;
});
  }

  onPatientSubmit(patientForm: NgForm){

    let appointment:Appointment={
      name:patientForm.value.name,
      contact:patientForm.value.contact,
      doctorId:patientForm.value.doctor,
      slotId:patientForm.value.slots,
      apptDate:patientForm.value.apptDate

    }
    this.patientService.bookAppointment(appointment).subscribe(data=>{
      this.appointment=data;
      localStorage.setItem('name',this.appointment.name);
      localStorage.setItem('contact',this.appointment.contact);
      localStorage.setItem('doctorId',String(this.appointment.doctorId));
      localStorage.setItem('slotId',String(this.appointment.slotId));
      localStorage.setItem('apptDate',this.appointment.apptDate);
      
      this.router.navigateByUrl('/booking-confirmation');
    });
    //console.log(patientForm.value.name);
    //console.log(patientForm.value.city);
    //console.log(patientForm.value.doctor);
    //console.log(patientForm.value.slots);
    //console.log(patientForm.value.apptDate);
    
    }

      selectDoctor(patientForm:NgForm){
        this.slotArr=this.tempArr;
        this.slotArr=this.slotArr.filter(s=>s.doctor.id==patientForm.value.doctor);
      }
}