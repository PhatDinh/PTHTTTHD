package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Skill")
public class skillModel {
	@Id
	private String _id;
	private String skillName;
	public skillModel(String _id, String skillName) {
		super();
		this._id = _id;
		this.skillName = skillName;
	}
	public skillModel() {
		super();
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getSkillName() {
		return skillName;
	}
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
}

