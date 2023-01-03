package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.example.demo.dto.userCourseResponseDto;
import com.example.demo.dto.userResponseDto;
import com.example.demo.model.courseModel;
import com.example.demo.model.userCourseModel;
import com.example.demo.model.userModel;
import com.example.demo.repository.courseRepository;
import com.example.demo.repository.userRepository;


@RestController
@RequestMapping("/api")
public class userController {
	
	@Autowired
	userRepository userRepo;
	
	@Autowired
	courseRepository courseRepo;
	
	Logger logger = LoggerFactory.getLogger(studentController.class);
	
	@PostMapping("/addUser")
	public ResponseEntity<userModel> addUser(@RequestBody userModel user) {
		try {
			userModel _user = userRepo.save(user);
			return new ResponseEntity
					<>(_user, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/users/{id}")
	public ResponseEntity<userResponseDto> getUserDetail(@PathVariable("id") String id) {
		Optional<userModel> userData = userRepo.findById(id);
		if (userData.isPresent()) {
			userModel _user = userData.get();
			
			List<userCourseModel> userCourseList =  _user.getCourses();
			List<userCourseResponseDto> userCourseRes = new ArrayList<userCourseResponseDto>();
			
			if(!(userCourseList == null)) {
				for (userCourseModel userCourse: userCourseList ) {
					String courseId = userCourse.getId();
					logger.info(courseId);
					if(!(courseId == null)) {
						Optional<courseModel> courseData = courseRepo.findById(courseId);
						courseModel _userCourse = courseData.get();
						userCourseResponseDto _userCourseRes = new userCourseResponseDto(
								userCourse.getId(), 
								userCourse.getStatus(),
								userCourse.getScore(),
								_userCourse.getCourseName(),
								_userCourse.getSkill());
						userCourseRes.add(_userCourseRes);
					}
				}
			}
			userResponseDto userRes = new userResponseDto(
					_user.get_id(),
					_user.getUserName(),
					_user.getDOB(),
					_user.getLevel(),	
					_user.getEmail(),
					_user.getRole(),
					_user.getName(),
					userCourseRes
			);
			return new ResponseEntity<>(userRes, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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
		try {
			Optional<userModel> userData = userRepo.findById(id);
			if (userData.isPresent()) {
				userModel _user = userData.get();
				_user.setUserName(user.getUserName());
				_user.setName(user.getName());
				_user.setLevel(user.getLevel());
				_user.setDOB(user.getDOB());
				_user.setEmail(user.getEmail());
				_user.setPassword(user.getPassword());
				_user.setRole(user.getRole());
				return new ResponseEntity<>(userRepo.save(_user), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
