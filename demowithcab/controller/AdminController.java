package com.example.demowithcab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demowithcab.entity.*;
import com.example.demowithcab.service.*;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	RideService abc;
	
	@PutMapping("/assign/{rideId}/{driverId}")
	public Ride assigndr(@PathVariable int rideId,@PathVariable int driverId)
	{
		return abc.assignDriver(rideId, driverId);
	}

}