package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.DBRef;

public class userCourseModel {
	@DBRef
	private String _id;
	private String status;
	private Number score;
	
	public userCourseModel(String _id, String status, Number score) {
		super();
		this._id = _id;
		this.status = status;
		this.score = score;
	}
	public userCourseModel() {
		super();
	}
	public String getId() {
		return _id;
	}
	public void setId(String _id) {
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
}
