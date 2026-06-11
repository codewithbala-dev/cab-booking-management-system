package com.example.demowithcab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demowithcab.entity.*;
import com.example.demowithcab.dao.*;
import com.example.demowithcab.dto.RideRequest;

@Service
public class RideService {
	@Autowired
	RideRepo r1;
	@Autowired
	UserRepo r2;
	
	public Ride requestride(int passengerId,RideRequest request)
	{
		Ride ride=new Ride();
		ride.setPassenger(
				r2.findById(passengerId).orElseThrow(()->new RuntimeException("id not found")));
				ride.setPickuplocation(request.getPickup());
				ride.setDroplocation(request.getDrop());
				ride.setStatus(RideStatus.REQUESTED);
				ride.setFare(100);
				r1.save(ride);
				return r1.save(ride);
		
	}
	public Ride assignDriver(int rideId,int driverId)
	{
		Ride ride=r1.findById(rideId).orElseThrow(()->new RuntimeException("id not found"));
		User driver=r2.findById(driverId).orElseThrow(()->new RuntimeException("id not found"));
		ride.setDriver(driver);
		ride.setStatus(RideStatus.ACCEPTED);
		return r1.save(ride);
	}
	public Ride startRide(int rideId)
	{
		Ride ride=r1.findById(rideId).orElseThrow(()->new RuntimeException("id not found"));
		ride.setStatus(RideStatus.STARTED);
		return r1.save(ride);
	}
	public Ride completeRide(int rideId)
	{

		Ride ride=r1.findById(rideId).orElseThrow(()->new RuntimeException("id not found"));
		ride.setStatus(RideStatus.COMPLETED);
		return r1.save(ride);
	
	}

}