package com.example.demowithcab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Ride {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	String pickuplocation;
	String droplocation;
	@ManyToOne
	User passenger;
	
	@ManyToOne 
	User driver;
	
	@Enumerated(EnumType.STRING)
	RideStatus status;
	int fare;
	public Ride() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Ride(String pickuplocation, String droplocation, User passenger, User driver, RideStatus status, int fare) {
		super();
		this.pickuplocation = pickuplocation;
		this.droplocation = droplocation;
		this.passenger = passenger;
		this.driver = driver;
		this.status = status;
		this.fare = fare;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPickuplocation() {
		return pickuplocation;
	}
	public void setPickuplocation(String pickuplocation) {
		this.pickuplocation = pickuplocation;
	}
	public String getDroplocation() {
		return droplocation;
	}
	public void setDroplocation(String droplocation) {
		this.droplocation = droplocation;
	}
	public User getPassenger() {
		return passenger;
	}
	public void setPassenger(User passenger) {
		this.passenger = passenger;
	}
	public User getDriver() {
		return driver;
	}
	public void setDriver(User driver) {
		this.driver = driver;
	}
	public RideStatus getStatus() {
		return status;
	}
	public void setStatus(RideStatus status) {
		this.status = status;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
	}
	
	
}
