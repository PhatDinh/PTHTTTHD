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
import com.example.demo.model.departmentModel;
import com.example.demo.repository.departmentRepository;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class departmentController {
	
	@Autowired
	departmentRepository departmentRepo;
	
	Logger logger = LoggerFactory.getLogger(classController.class);
	
	@PostMapping("/addDepartment")
	public ResponseEntity<departmentModel> addDepartment(@RequestBody departmentModel department) {
		try {
			departmentModel _department = departmentRepo.save(department);
			return new ResponseEntity
					<>(_department, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/departments/{id}")
	public ResponseEntity<departmentModel> getDepartment(@PathVariable("id") String id) {
		Optional<departmentModel> classData = departmentRepo.findById(id);
		if (classData.isPresent()) {
			departmentModel _department = classData.get();
			
			return new ResponseEntity<>(_department , HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/departments")
	public ResponseEntity<List<departmentModel>> getDepartments() {
		try {
			List<departmentModel> classList = new ArrayList<departmentModel>();
			departmentRepo.findAll().forEach(classList::add);
		if (classList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
			return new ResponseEntity<>(classList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/departments/{id}")
	public ResponseEntity<departmentModel> editDepartment(@PathVariable("id") String id, @RequestBody departmentModel 
			department) {
		try {
			Optional<departmentModel> classData = departmentRepo.findById(id);
			if (classData.isPresent()) {
				departmentModel _department = classData.get();
				_department.setDepartmentName(department.getDepartmentName());
				_department.setLevels(department.getLevels());
				return new ResponseEntity<>(departmentRepo.save(_department), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/departments/{id}")
	public ResponseEntity<HttpStatus> deleteDepartment(@PathVariable("id") String id) {
		try {
			departmentRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
