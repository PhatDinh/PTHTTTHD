package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Course")
public class courseModel {
	@Id
	private String _id;
	private String courseName;
	private String room;
	private String password;
	private String description;
	private String trainingSkill;
	private String target;
	private List<sessionModel> sessions;
	
	public courseModel() {
		super();
	}

	public courseModel(String _id, String courseName, String room, String password, String description,
			String trainingSkill, String target, List<sessionModel> sessions) {
		super();
		this._id = _id;
		this.courseName = courseName;
		this.room = room;
		this.password = password;
		this.description = description;
		this.trainingSkill = trainingSkill;
		this.target = target;
		this.sessions = sessions;
	}

	public courseModel(String courseName, String room, String password, String description, String trainingSkill,
			String target, List<sessionModel> sessions) {
		super();
		this.courseName = courseName;
		this.room = room;
		this.password = password;
		this.description = description;
		this.trainingSkill = trainingSkill;
		this.target = target;
		this.sessions = sessions;
	}
	
	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getRoom() {
		return room;
	}

	public void setRoom(String room) {
		this.room = room;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTrainingSkill() {
		return trainingSkill;
	}

	public void setTrainingSkill(String trainingSkill) {
		this.trainingSkill = trainingSkill;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}

	public List<sessionModel> getSessions() {
		return sessions;
	}

	public void setSessions(List<sessionModel> sesions) {
		this.sessions = sesions;
	}

	
}

