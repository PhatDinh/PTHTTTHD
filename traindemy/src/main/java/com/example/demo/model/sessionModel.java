package com.example.demo.model;

import org.springframework.data.annotation.Id;

public class sessionModel {
	@Id
	private String _id;
	private String sessionName;
	private String content;
	private String trainingSkill;
	private String target;
	
	public sessionModel() {
		super();
	}
	
	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}
	
	public sessionModel(String _id, String sessionName, String content, String trainingSkill, String target) {
		super();
		this._id = _id;
		this.sessionName = sessionName;
		this.content = content;
		this.trainingSkill = trainingSkill;
		this.target = target;
	}

	public sessionModel(String sessionName, String content, String trainingSkill, String target) {
		super();
		this.sessionName = sessionName;
		this.content = content;
		this.trainingSkill = trainingSkill;
		this.target = target;
	}

	public String getSessionName() {
		return sessionName;
	}

	public void setSessionName(String sessionName) {
		this.sessionName = sessionName;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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
	
}
