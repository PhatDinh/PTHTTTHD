package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.enrollRequestDto;
import com.example.demo.dto.loginRequestDto;
import com.example.demo.dto.updateScoreRequestDto;
import com.example.demo.model.courseModel;
import com.example.demo.model.userCourseModel;
import com.example.demo.model.userModel;
import com.example.demo.repository.userRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class studentController {
	
	@Autowired
	userRepository userRepo;
	
	 Logger logger = LoggerFactory.getLogger(studentController.class);
	
	@PostMapping("/student/enroll")
	public ResponseEntity<userModel> enroll(@RequestBody enrollRequestDto enrollRequest ) {
		String courseId = enrollRequest.getCourseId();
		String userId = enrollRequest.getUserId();
		Optional<userModel> userData = userRepo.findById(userId);
		userModel _user = userData.get();
	
		if(_user.getRole().equals("student")) {
			
			List<userCourseModel> userCourse = _user.getCourses();
			userCourseModel newUserCourse = new userCourseModel(courseId, null, null);

			userCourse.add(newUserCourse);
			_user.setCourses(userCourse);
			
			return new ResponseEntity<>(userRepo.save(_user), HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("/student/updateScore")
	public ResponseEntity<userModel> updateScore(@RequestBody updateScoreRequestDto updateScoreRequest ) {
		String courseId = updateScoreRequest.getCourseId();
		String userId = updateScoreRequest.getUserId();
		String status = updateScoreRequest.getStatus();
		Number score = updateScoreRequest.getScore();
		Optional<userModel> userData = userRepo.findById(userId);
		userModel _user = userData.get();
	
		if(_user.getRole().equals("student")) {
			List<userCourseModel> userCourses = _user.getCourses();
			for(userCourseModel userCourse : userCourses) {
				if(courseId.equals(userCourse.getId())) {
					userCourse.setScore(score);
					userCourse.setStatus(status);
				}
			}
			return new ResponseEntity<>(userRepo.save(_user), HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/students/courses")
	public ResponseEntity<List<userModel>> courseList(
			@RequestParam(required = false) String courseId
			) {
		
			List<userModel> userList = new ArrayList<userModel>();
			Logger log = LoggerFactory.getLogger(courseController.class);
			log.info(courseId);
			userList = userRepo.findByCourses(courseId);
			
		if (userList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
			return new ResponseEntity<>(userList, HttpStatus.OK);
	
	}
}

