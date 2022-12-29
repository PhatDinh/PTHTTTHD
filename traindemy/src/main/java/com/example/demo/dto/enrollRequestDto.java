package com.example.demo.dto;

import lombok.Data;

@Data
public class enrollRequestDto {
	private String courseId;
	private String userId;
	
	public enrollRequestDto(String courseId, String userId) {
		super();
		this.courseId = courseId;
		this.userId = userId;
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
	
	
}