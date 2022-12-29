package com.example.demo.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.demo.model.userCourseModel;

@Document(collection = "User")
public class userResponseDto {
	@Id
	private String _id;
	private String userName;
	private String password;
	private String role;
	private String name;
	private List<userCourseResponseDto> courses;

	public userResponseDto(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	
	public userResponseDto(String userName, String password, String role) {
		super();
		this.userName = userName;
		this.password = password;
		this.role = role;
	}

	public userResponseDto(String userId, String userName, String password, String role) {
		super();
		this._id = userId;
		this.userName = userName;
		this.password = password;
		this.role = role;
	}

	public userResponseDto(String _id, String userName, String role, String name,
			List<userCourseResponseDto> courses) {
		super();
		this._id = _id;
		this.userName = userName;
		this.role = role;
		this.name = name;
		this.courses = courses;
	}

	public userResponseDto() {
		super();
	}
	
	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public List<userCourseResponseDto> getCourses() {
		return courses;
	}

	public void setCourses(List<userCourseResponseDto> courses) {
		this.courses = courses;
	}
}

