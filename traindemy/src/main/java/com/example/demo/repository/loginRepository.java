package com.example.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.userModel;

@Repository
public class loginRepository {
	@Autowired
	MongoTemplate mongoTemplate;
	
	public userModel loginRepo(String userName) {
		Query query = new Query().addCriteria(Criteria.where("userName").is(userName));
		userModel user = mongoTemplate.findOne(query, userModel.class);
		return user;
	}
}