package com.AppointmentProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AppointmentProject.model.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long>{

}