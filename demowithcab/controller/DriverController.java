package com.example.demowithcab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demowithcab.service.*;
import com.example.demowithcab.entity.*;
@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/driver")
public class DriverController {
	@Autowired
	RideService rs1;
	@PutMapping("/start/{rideId}")
	public Ride startri(@PathVariable int rideId) 
	{
		return rs1.startRide(rideId);
	}
	
	@PutMapping("/complete/{rideId}")
	public Ride completeri(@PathVariable int rideId) 
	{
		return rs1.completeRide(rideId);
	}


}