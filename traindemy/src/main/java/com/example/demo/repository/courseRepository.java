package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.courseModel;

public interface courseRepository extends MongoRepository<courseModel, String>{

}