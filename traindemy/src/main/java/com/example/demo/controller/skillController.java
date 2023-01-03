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
import com.example.demo.model.skillModel;
import com.example.demo.repository.skillRepository;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class skillController {
	
	@Autowired
	skillRepository skillRepo;
	
	Logger logger = LoggerFactory.getLogger(classController.class);
	
	@PostMapping("/addSkill")
	public ResponseEntity<skillModel> addSkill(@RequestBody skillModel skill) {
		try {
			skillModel _skill = skillRepo.save(skill);
			return new ResponseEntity
					<>(_skill, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/skills/{id}")
	public ResponseEntity<skillModel> getSkill(@PathVariable("id") String id) {
		Optional<skillModel> classData = skillRepo.findById(id);
		if (classData.isPresent()) {
			skillModel _skill = classData.get();
			
			return new ResponseEntity<>(_skill , HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/skills")
	public ResponseEntity<List<skillModel>> getSkills() {
		try {
			List<skillModel> classList = new ArrayList<skillModel>();
			skillRepo.findAll().forEach(classList::add);
		if (classList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
			return new ResponseEntity<>(classList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/skills/{id}")
	public ResponseEntity<skillModel> editSkill(@PathVariable("id") String id, @RequestBody skillModel 
			skill) {
		try {
			Optional<skillModel> classData = skillRepo.findById(id);
			if (classData.isPresent()) {
				skillModel _skill = classData.get();
				_skill.setSkillName(skill.getSkillName());
				return new ResponseEntity<>(skillRepo.save(_skill), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/skills/{id}")
	public ResponseEntity<HttpStatus> deleteSkill(@PathVariable("id") String id) {
		try {
			skillRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
