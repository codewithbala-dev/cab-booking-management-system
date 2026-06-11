package com.example.demowithcab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demowithcab.entity.*;
import com.example.demowithcab.service.*;
@CrossOrigin(origins = "http://localhost:5174")
@RestController
public class UserController {
	@Autowired
	UserService u1;
	
	@PostMapping("/register")
	public User reg(@RequestBody User u)
	{
		return u1.savedetails(u);
	}
	

}