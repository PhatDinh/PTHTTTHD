package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.skillModel;

public interface skillRepository extends MongoRepository<skillModel, String>{

}