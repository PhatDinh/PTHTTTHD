package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.assignmentModel;

public interface assignmentRepository extends MongoRepository<assignmentModel, String>{
	public List<assignmentModel> findBySessionId(String sessionId);
}