package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Course")
public class courseModel {
	@Id
	private String _id;
	private String courseName;
	private String description;
	private skillModel skill;
	private String skillId;
	private String target;
	private List<sessionModel> sessions;
	private String author; // userId
	public courseModel() {
		super();
	}
	public courseModel(String courseName, String description, skillModel skill, String skillId, String target,
			List<sessionModel> sessions, String author) {
		super();
		this.courseName = courseName;
		this.description = description;
		this.skill = skill;
		this.skillId = skillId;
		this.target = target;
		this.sessions = sessions;
		this.author = author;
	}
	public courseModel(String _id, String courseName, String description, skillModel skill, String skillId,
			String target, List<sessionModel> sessions, String author) {
		super();
		this._id = _id;
		this.courseName = courseName;
		this.description = description;
		this.skill = skill;
		this.skillId = skillId;
		this.target = target;
		this.sessions = sessions;
		this.author = author;
	}

	public courseModel(String _id, String courseName, String description,
			skillModel skill, String target, List<sessionModel> sessions) {
		super();
		this._id = _id;
		this.courseName = courseName;
		this.description = description;
		this.skill = skill;
		this.target = target;
		this.sessions = sessions;
	}
	public courseModel(String courseName, String description, skillModel skill,
			String target, List<sessionModel> sessions, String author) {
		super();
		this.courseName = courseName;
		this.description = description;
		this.skill = skill;
		this.target = target;
		this.sessions = sessions;
		this.author = author;
	}
	public courseModel(String _id, String courseName, String description,
			skillModel skill, String target, List<sessionModel> sessions, String author) {
		super();
		this._id = _id;
		this.author = author;
		this.courseName = courseName;
		this.description = description;
		this.skill = skill;
		this.target = target;
		this.sessions = sessions;
	}
	public courseModel(String _id, String courseName) {
		super();
		this._id = _id;
		this.courseName = courseName;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public skillModel getSkill() {
		return skill;
	}
	public void setSkill(skillModel skill) {
		this.skill = skill;
	}
	public String getSkillId() {
		return skillId;
	}
	public void setSkillId(String skillId) {
		this.skillId = skillId;
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
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
}

