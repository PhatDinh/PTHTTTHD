package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.courseModel;

public interface assignmentRepository extends MongoRepository<courseModel, String>{

}