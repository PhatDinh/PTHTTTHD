package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.classModel;

public interface classRepository extends MongoRepository<classModel, String>{

}