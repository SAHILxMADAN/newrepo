package com.AppointmentProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AppointmentProject.model.Slots;

public interface SlotsRepository extends JpaRepository<Slots,Long>{

}