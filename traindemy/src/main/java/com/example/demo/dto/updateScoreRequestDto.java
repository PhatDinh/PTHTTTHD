package com.example.demo.dto;

import lombok.Data;

@Data
public class updateScoreRequestDto {
	private String courseId;
	private String userId;
	private String status;
	private Number score;
	
	public updateScoreRequestDto(String courseId, String userId, String status, Number score) {
		super();
		this.courseId = courseId;
		this.userId = userId;
		this.status = status;
		this.score = score;
	}
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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
