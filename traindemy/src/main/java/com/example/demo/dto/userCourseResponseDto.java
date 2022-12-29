package com.example.demo.dto;

import org.springframework.data.mongodb.core.mapping.DBRef;

public class userCourseResponseDto {
	@DBRef
	private String _id;
	private String status;
	private Number score;
	private String courseName;
	private String trainingSkill;
	public userCourseResponseDto(String status, Number score, String courseName, String trainingSkill) {
		super();
		this.status = status;
		this.score = score;
		this.courseName = courseName;
		this.trainingSkill = trainingSkill;
	}
	public userCourseResponseDto(String _id, String status, Number score, String courseName, String trainingSkill) {
		super();
		this._id = _id;
		this.status = status;
		this.score = score;
		this.courseName = courseName;
		this.trainingSkill = trainingSkill;
	}
	public userCourseResponseDto() {
		super();
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Number getScore() {
		return score;
	}
	public void setScore(Number score) {
		this.score = score;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getTrainingSkill() {
		return trainingSkill;
	}
	public void setTrainingSkill(String trainingSkill) {
		this.trainingSkill = trainingSkill;
	}
	
	
}
