package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.userModel;
import com.example.demo.repository.userRepository;


@RestController
@RequestMapping("/api")
public class userController {
	
	@Autowired
	userRepository userRepo;
	
	@PostMapping("/addUser")
	public ResponseEntity<userModel> addUser(@RequestBody userModel user) {
		try {
			userModel _user = userRepo.save(new userModel(user.getUserName(),
					user.getPassword(), user.getRole()));
			return new ResponseEntity
					<>(_user, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<userModel>> userList() {
		
		try {
			List<userModel> userList = new ArrayList<userModel>();
			userRepo.findAll().forEach(userList::add);
		if (userList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
			return new ResponseEntity<>(userList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<userModel> editUser(@PathVariable("id") String id, @RequestBody userModel 
	user) {
		Optional<userModel> userData = userRepo.findById(id);
		if (userData.isPresent()) {
			userModel _user = userData.get();
			_user.setUserName(user.getUserName());
			_user.setPassword(user.getPassword());
			_user.setRole(user.getRole());
			return new ResponseEntity<>(userRepo.save(_user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<Optional<userModel>> getUserDetail(@PathVariable("id") String id) {
		try {
			Optional<userModel> userData = userRepo.findById(id);
			if (userData.isPresent()) {
				return new ResponseEntity<>(userData, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
