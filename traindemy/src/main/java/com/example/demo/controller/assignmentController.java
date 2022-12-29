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

import com.example.demo.model.assignmentModel;
import com.example.demo.repository.assignmentRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class assignmentController {
	
	@Autowired
	assignmentRepository assignmentRepo;
	
	Logger logger = LoggerFactory.getLogger(assignmentController.class);
	@PostMapping("/addAssignment")
	public ResponseEntity<assignmentModel> addassignment(@RequestBody assignmentModel assignment) {
		assignmentModel _assignment = assignmentRepo.save(assignment);
		logger.info(assignment.getAssignmentName());
		return new ResponseEntity<>(_assignment, HttpStatus.CREATED);
	}
	
	@GetMapping("/assignments")
	public ResponseEntity<List<assignmentModel>> assignmentListByTrainer(@RequestParam(required = false) String sessionId ) {
		try {
			List<assignmentModel> assignmentList = new ArrayList<assignmentModel>();
			Logger log = LoggerFactory.getLogger(assignmentController.class);
			log.info(sessionId);
			if(sessionId == null) {
				assignmentRepo.findAll().forEach(assignmentList::add);
			} else {
				assignmentList = assignmentRepo.findBySessionId(sessionId);
			}
		if (assignmentList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
			return new ResponseEntity<>(assignmentList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/assignments/{id}")
	public ResponseEntity<assignmentModel> editassignment(@PathVariable("id") String id, @RequestBody assignmentModel 
	assignment) {
		Optional<assignmentModel> assignmentData = assignmentRepo.findById(id);
		if (assignmentData.isPresent()) { // send without _id will create new assignment
			return new ResponseEntity<>(assignmentRepo.save(assignment), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/assignments/{id}")
	public ResponseEntity<Optional<assignmentModel>> getUserDetail(@PathVariable("id") String id) {
		try {
			Optional<assignmentModel> assignmentData = assignmentRepo.findById(id);
			if (assignmentData.isPresent()) {
				return new ResponseEntity<>(assignmentData, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}

