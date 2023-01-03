package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.levelModel;

public interface levelRepository extends MongoRepository<levelModel, String>{

}