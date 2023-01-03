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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.courseModel;
import com.example.demo.model.sessionModel;
import com.example.demo.model.userModel;
import com.example.demo.repository.courseRepository;
import com.example.demo.repository.sessionRepository;
import com.example.demo.repository.userRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class courseController {
	
	@Autowired
	courseRepository courseRepo;
	
	@Autowired
	userRepository userRepo;
	
	@Autowired
	sessionRepository sessionRepo;
	
	
	Logger logger = LoggerFactory.getLogger(courseController.class);
	@PostMapping("/addCourse")
	public ResponseEntity<courseModel> addCourse(@RequestBody courseModel course) {
		List<sessionModel> sessionAr = sessionRepo.saveAll(course.getSessions());

		courseModel newCourse = courseRepo.save(
				new courseModel(
						course.getCourseName(),
						course.getDescription(),
						course.getSkill(),
						course.getSkillId(),
						course.getTarget(),
						sessionAr,
						course.getAuthor()
					));
		courseModel _course = courseRepo.save(newCourse);
		return new ResponseEntity<>(_course, HttpStatus.CREATED);
	}
	
	@GetMapping("/courses")
	public ResponseEntity<List<courseModel>> courseList(
			@RequestParam(required = false) String trainerId,
			@RequestParam(required = false) List<String> skillIds
			) {
		try {
			List<courseModel> courseList = new ArrayList<courseModel>();
			Logger log = LoggerFactory.getLogger(courseController.class);
			log.info(trainerId);
			if(trainerId == null && skillIds == null) {
				courseRepo.findAll().forEach(courseList::add);
			} else {
				if(skillIds == null) {					
					courseList = courseRepo.findByAuthor(trainerId);
				}
				if(trainerId == null) {
					courseList = courseRepo.findBySkillIds(skillIds);
				}
			}
		if (courseList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
			return new ResponseEntity<>(courseList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/courses/{id}")
	public ResponseEntity<courseModel> editCourse(@PathVariable("id") String id, @RequestBody courseModel 
	course) {
		Optional<courseModel> courseData = courseRepo.findById(id);
		if (courseData.isPresent()) { // send without _id will create new course
			return new ResponseEntity<>(courseRepo.save(course), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/courses/{id}")
	public ResponseEntity<Optional<courseModel>> getUserDetail(@PathVariable("id") String id) {
		try {
			Optional<courseModel> courseData = courseRepo.findById(id);
			if (courseData.isPresent()) {
				return new ResponseEntity<>(courseData, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
