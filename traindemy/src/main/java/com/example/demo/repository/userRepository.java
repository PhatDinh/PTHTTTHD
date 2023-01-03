package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.userModel;

public interface userRepository extends MongoRepository<userModel, String>{
	public userModel findByUserName(String userName);

	@Query("{ 'courses._id': ?0 }")
	public List<userModel> findByCourses(String courseId);
}