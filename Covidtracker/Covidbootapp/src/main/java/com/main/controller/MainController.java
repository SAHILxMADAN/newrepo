package com.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.model.Employee;
import com.main.model.Victimdto;
import com.main.model.Victims;
import com.main.repository.EmployeeRepository;
import com.main.repository.VictimsRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:3969"})
public class MainController {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private VictimsRepository victimsRepository;
	
	@PostMapping("employee/insert")
	public Employee insertEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	@GetMapping("employee/get/all")
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}
	@GetMapping("employee/get/one/{id}")
	public Employee getEmployeeById(@PathVariable("id") Long id) {
		Optional<Employee> optional = employeeRepository.findById(id);
		if(!optional.isPresent())
			throw new RuntimeException("Invalid ID");
		Employee e = optional.get();
		System.out.println(e);
		return e;
	}
	@PostMapping("victimdto/insert")
	public Victims insertVictim(@RequestBody Victimdto victimdto) {
		Victims v = new Victims();
		Optional<Employee> optional = employeeRepository.findById(victimdto.getEmployeeid());
		if(!optional.isPresent())
			throw new RuntimeException("Invalid ID");
		Employee e = optional.get();		
		v.setEmployee(e);
		v.setAffectedDate(victimdto.getAffectedDate());
		v.setDosages(victimdto.getDosages());
		v.setSickLeaves(victimdto.getSickLeaves());
		v.setFunds(victimdto.getFunds());
		v.setStatus(victimdto.getStatus());
		System.out.println(v);
		return victimsRepository.save(v);
	}
	@GetMapping("victims/all")
	public List<Victims> getAllVictims() {
		return victimsRepository.findAll();
	}
}
