package com.example.demowithcab.dto;

public class RideRequest {
	String pickup;
	String drop;
	public String getPickup() {
		return pickup;
	}
	public String getDrop() {
		return drop;
	}
	public void setDrop(String drop) {
		this.drop = drop;
	}
	public void setPickup(String pickup) {
		this.pickup = pickup;
	}
 
}
