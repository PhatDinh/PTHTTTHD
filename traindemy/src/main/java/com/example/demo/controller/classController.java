package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Date;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.classModel;
import com.example.demo.repository.classRepository;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class classController {
	
	@Autowired
	classRepository classRepo;
	
	Logger logger = LoggerFactory.getLogger(classController.class);
	
	@PostMapping("/addClass")
	public ResponseEntity<classModel> addClass(@RequestBody classModel classObj) {
		try {
			classModel _class = classRepo.save(classObj);
			return new ResponseEntity
					<>(_class, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/classes/{id}")
	public ResponseEntity<classModel> getClassDetail(@PathVariable("id") String id) {
		Optional<classModel> classData = classRepo.findById(id);
		if (classData.isPresent()) {
			classModel _class = classData.get();
			
			return new ResponseEntity<>(_class , HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/classes")
	public ResponseEntity<List<classModel>> classList() {
		try {
			List<classModel> classList = new ArrayList<classModel>();
			classRepo.findAll().forEach(classList::add);
		if (classList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
			return new ResponseEntity<>(classList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/classes/retest/{id}")
	public ResponseEntity<classModel> retestClass(@PathVariable("id") String id, @RequestBody Date 
			date) {
		try {
			Optional<classModel> classData = classRepo.findById(id);
			if (classData.isPresent()) {
				classModel _class = classData.get();
				_class.setRetestDate(date);
				return new ResponseEntity<>(classRepo.save(_class), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/classes/{id}")
	public ResponseEntity<classModel> editClass(@PathVariable("id") String id, @RequestBody classModel 
			classObj) {
		try {
			Optional<classModel> classData = classRepo.findById(id);
			if (classData.isPresent()) {
				classModel _class = classData.get();
				_class.setClassName(classObj.getClassName());
				_class.setDescription(classObj.getDescription());
				_class.setMethod(classObj.getMethod());
				_class.setStartDate(classObj.getStartDate());
				_class.setEndDate(classObj.getEndDate());
				_class.setDepartment(classObj.getDepartment());
				_class.setLevel(classObj.getLevel());
				_class.setSkills(classObj.getSkills());
				_class.setCourses(classObj.getCourses());
				return new ResponseEntity<>(classRepo.save(_class), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/classes/{id}")
	public ResponseEntity<HttpStatus> deleteClass(@PathVariable("id") String id) {
		try {
			classRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
