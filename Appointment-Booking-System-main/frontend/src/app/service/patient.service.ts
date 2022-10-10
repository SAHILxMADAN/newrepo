import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { Doctor } from '../model/doctor.model';
import { Slots } from '../model/slots.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  allDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>('http://localhost:2291/all/doctors');
  }

  allSlots():Observable<Slots[]>{
    return this.http.get<Slots[]>('http://localhost:2291/all/slots');
  }

  bookAppointment(appointment:Appointment):Observable<Appointment>{
     return this.http.post<Appointment>('http://localhost:2291/book/appointment',appointment);
  }

getDoctorInfo(doctorId: string) :Observable<Doctor>{
     return this.http.get<Doctor>('http://localhost:2291/doctor/' + doctorId);
  }

  getSlotInfo(slotId: string) :Observable<Slots>{
    return this.http.get<Slots>('http://localhost:2291/slot/' + slotId);

  }

  getAllAppointment(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:2291/get/all/appointment');
  }
}