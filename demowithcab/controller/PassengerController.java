package com.example.demowithcab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demowithcab.service.*;
import com.example.demowithcab.entity.*;
import com.example.demowithcab.dto.*;
@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/passenger")
public class PassengerController {
	@Autowired
	RideService rs;
	
	@PostMapping("/ride/{passengerId}")
	public Ride get1(@PathVariable int passengerId,@RequestBody RideRequest request)
	{
		return rs.requestride(passengerId, request);
	}

}