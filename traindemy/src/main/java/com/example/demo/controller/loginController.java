package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.loginRequestDto;
import com.example.demo.model.userModel;
import com.example.demo.repository.loginRepository;
import com.example.demo.repository.userRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class loginController {
	
	@Autowired
	userRepository userRepo;
	
	@Autowired
	loginRepository loginRepo;
	
	@PostMapping("/login")
	public ResponseEntity<userModel> login(@RequestBody loginRequestDto loginRequest ) {
		String userName = loginRequest.getUserName();
		String password = loginRequest.getPassword();
		userModel userData = loginRepo.loginRepo(userName);

		if(userData.getPassword().equals(password)) {
			return new ResponseEntity<>(userData, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}




