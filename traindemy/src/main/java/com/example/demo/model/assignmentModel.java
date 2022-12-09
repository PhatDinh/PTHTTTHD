package com.example.demo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Course")
public class assignmentModel {
	enum type {
		CHOICE,
		ESSAY
	}
	
	@Id
	private String _id;
	private String assignmentName;
	private String description;
	private Date examDuration;
	private String startTime;
	private type type;
	private String pointInPeriod;
	private List<multiChoiceModel> multiChoiceQuestions;
	private List<essayModel> essayQuestions;
	
	public assignmentModel() {
		super();
	}
	
	public assignmentModel(String _id, String assignmentName, String description, Date examDuration, String startTime,
			com.example.demo.model.assignmentModel.type type, String pointInPeriod,
			List<multiChoiceModel> multiChoiceQuestions, List<essayModel> essayQuestions) {
		super();
		this._id = _id;
		this.assignmentName = assignmentName;
		this.description = description;
		this.examDuration = examDuration;
		this.startTime = startTime;
		this.type = type;
		this.pointInPeriod = pointInPeriod;
		this.multiChoiceQuestions = multiChoiceQuestions;
		this.essayQuestions = essayQuestions;
	}

	public assignmentModel(String assignmentName, String description, Date examDuration, String startTime,
			com.example.demo.model.assignmentModel.type type, String pointInPeriod,
			List<multiChoiceModel> multiChoiceQuestions, List<essayModel> essayQuestions) {
		super();
		this.assignmentName = assignmentName;
		this.description = description;
		this.examDuration = examDuration;
		this.startTime = startTime;
		this.type = type;
		this.pointInPeriod = pointInPeriod;
		this.multiChoiceQuestions = multiChoiceQuestions;
		this.essayQuestions = essayQuestions;
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getAssignmentName() {
		return assignmentName;
	}

	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getExamDuration() {
		return examDuration;
	}

	public void setExamDuration(Date examDuration) {
		this.examDuration = examDuration;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public type getType() {
		return type;
	}

	public void setType(type type) {
		this.type = type;
	}

	public String getPointInPeriod() {
		return pointInPeriod;
	}

	public void setPointInPeriod(String pointInPeriod) {
		this.pointInPeriod = pointInPeriod;
	}

	public List<multiChoiceModel> getMultiChoiceQuestions() {
		return multiChoiceQuestions;
	}

	public void setMultiChoiceQuestions(List<multiChoiceModel> multiChoiceQuestions) {
		this.multiChoiceQuestions = multiChoiceQuestions;
	}

	public List<essayModel> getEssayQuestions() {
		return essayQuestions;
	}

	public void setEssayQuestions(List<essayModel> essayQuestions) {
		this.essayQuestions = essayQuestions;
	}

	

	
}

