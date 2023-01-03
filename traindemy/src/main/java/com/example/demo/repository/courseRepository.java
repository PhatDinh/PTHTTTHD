package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.courseModel;

public interface courseRepository extends MongoRepository<courseModel, String>{
	public List<courseModel> findByAuthor(String userId);
	
	@Query("{skillId: { $in: ?0 } }")
	public List<courseModel> findBySkillIds(List<String> skillIds);

	public List<courseModel> findBySkillId(String skillId);
}