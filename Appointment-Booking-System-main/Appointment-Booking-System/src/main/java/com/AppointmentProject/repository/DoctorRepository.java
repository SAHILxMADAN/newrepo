package com.AppointmentProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AppointmentProject.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor,Long>{

}