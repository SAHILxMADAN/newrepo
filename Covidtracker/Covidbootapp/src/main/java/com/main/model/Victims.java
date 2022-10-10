package com.main.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Victims {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@OneToOne
	private Employee employee;
	private LocalDate affectedDate;
	private int dosages;
	private int sickLeaves;
	private double funds;
	private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public LocalDate getAffectedDate() {
		return affectedDate;
	}

	public void setAffectedDate(LocalDate affectedDate) {
		this.affectedDate = affectedDate;
	}

	public int getDosages() {
		return dosages;
	}

	public void setDosages(int dosages) {
		this.dosages = dosages;
	}

	public int getSickLeaves() {
		return sickLeaves;
	}

	public void setSickLeaves(int sickLeaves) {
		this.sickLeaves = sickLeaves;
	}

	public double getFunds() {
		return funds;
	}

	public void setFunds(double funds) {
		this.funds = funds;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Victims [id=" + id + ", employee=" + employee + ", affectedDate=" + affectedDate + ", dosages="
				+ dosages + ", sickLeaves=" + sickLeaves + ", funds=" + funds + ", status=" + status + "]";
	}

}
