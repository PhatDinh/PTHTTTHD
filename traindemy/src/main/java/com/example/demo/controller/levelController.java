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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.levelModel;
import com.example.demo.repository.levelRepository;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class levelController {
	
	@Autowired
	levelRepository levelRepo;
	
	Logger logger = LoggerFactory.getLogger(classController.class);
	
	@PostMapping("/addLevel")
	public ResponseEntity<levelModel> addLevel(@RequestBody levelModel level) {
		try {
			levelModel _level = levelRepo.save(level);
			return new ResponseEntity
					<>(_level, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/levels/{id}")
	public ResponseEntity<levelModel> getLevel(@PathVariable("id") String id) {
		Optional<levelModel> classData = levelRepo.findById(id);
		if (classData.isPresent()) {
			levelModel _level = classData.get();
			
			return new ResponseEntity<>(_level , HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/levels")
	public ResponseEntity<List<levelModel>> getLevels() {
		try {
			List<levelModel> classList = new ArrayList<levelModel>();
			levelRepo.findAll().forEach(classList::add);
		if (classList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
			return new ResponseEntity<>(classList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/levels/{id}")
	public ResponseEntity<levelModel> editLevel(@PathVariable("id") String id, @RequestBody levelModel 
			level) {
		try {
			Optional<levelModel> classData = levelRepo.findById(id);
			if (classData.isPresent()) {
				levelModel _level = classData.get();
				_level.setLevelName(level.getLevelName());
				_level.setSkills(level.getSkills());
				return new ResponseEntity<>(levelRepo.save(_level), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/levels/{id}")
	public ResponseEntity<HttpStatus> deleteLevel(@PathVariable("id") String id) {
		try {
			levelRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
