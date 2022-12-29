package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.courseModel;

public interface courseRepository extends MongoRepository<courseModel, String>{
	public List<courseModel> findByAuthor(String userId);
}