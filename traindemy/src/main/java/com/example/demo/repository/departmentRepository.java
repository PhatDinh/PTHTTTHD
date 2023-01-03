package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.departmentModel;

public interface departmentRepository extends MongoRepository<departmentModel, String>{

}
