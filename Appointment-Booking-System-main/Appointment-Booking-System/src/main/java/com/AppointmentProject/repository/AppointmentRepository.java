package com.AppointmentProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AppointmentProject.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment,Long>{

}