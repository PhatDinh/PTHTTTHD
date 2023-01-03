package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Level")
public class levelModel {
	@Id
	private String _id;
	private String levelName;
	private List<skillModel> skills;
	public levelModel(String _id, String levelName, List<skillModel> skills) {
		super();
		this._id = _id;
		this.levelName = levelName;
		this.skills = skills;
	}
	public levelModel(String _id, String levelName) {
		super();
		this._id = _id;
		this.levelName = levelName;
	}
	public levelModel() {
		super();
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getLevelName() {
		return levelName;
	}
	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}
	public List<skillModel> getSkills() {
		return skills;
	}
	public void setSkills(List<skillModel> skills) {
		this.skills = skills;
	}
}

