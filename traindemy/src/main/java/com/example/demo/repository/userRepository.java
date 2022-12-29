package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.userModel;

public interface userRepository extends MongoRepository<userModel, String>{
	public userModel findByUserName(String userName);
}