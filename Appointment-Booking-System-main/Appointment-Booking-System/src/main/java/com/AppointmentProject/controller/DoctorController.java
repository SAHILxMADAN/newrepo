package com.AppointmentProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.AppointmentProject.model.Appointment;
import com.AppointmentProject.model.Doctor;
import com.AppointmentProject.model.Slots;
import com.AppointmentProject.repository.AppointmentRepository;
import com.AppointmentProject.repository.DoctorRepository;
import com.AppointmentProject.repository.SlotsRepository;

@RestController
@CrossOrigin(origins= {"http://localhost:7442"})
public class DoctorController {

	@Autowired
	private DoctorRepository doctorRepository;
    @Autowired
    private SlotsRepository slotsRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;
	
    @PostMapping("/doctor")
    public Doctor insertDoctor(@RequestBody Doctor doctor) {
    	return doctorRepository.save(doctor);
    }
    @PostMapping("/slot/{did}")
    public Slots slotPost(@RequestBody Slots slots,@PathVariable ("did") long did) {
    	Optional<Doctor> optional = doctorRepository.findById(did);
    	if(!(optional.isPresent()))
    		throw new RuntimeException("invalid id");
    	Doctor d=optional.get();
    	slots.setDoctor(d);
    	
    	return slotsRepository.save(slots);
    }
    @GetMapping("/all/doctors")
    public List<Doctor> allDoctors() {
    	return doctorRepository.findAll();
    }
    @GetMapping("/all/slots")
    public List<Slots> allSlots() {
    	return slotsRepository.findAll();
    }
    @PostMapping("/book/appointment")
    public Appointment bookAppointment(@RequestBody Appointment appointment ) {
    	return appointmentRepository.save(appointment);
    } 
    
    @GetMapping("/doctor/{id}")
    public Doctor getDoctorById(@PathVariable("id") Long id) {
    Optional<Doctor> optional  = doctorRepository.findById(id);
    if(!optional.isPresent())
    throw new RuntimeException("ID is Invalid");

    Doctor d = optional.get();
    return d;
    }

    @GetMapping("/slot/{id}")
    public Slots getSlotById(@PathVariable("id") Long id) {
    Optional<Slots> optional = slotsRepository.findById(id);
    if(!optional.isPresent())
    throw new RuntimeException("ID is Invalid");
    Slots s = optional.get();
    return s;
    }
    
    @GetMapping("get/all/appointment")
	public List<Appointment> getAllAppointment() {
		return appointmentRepository.findAll();
	}
}