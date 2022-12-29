package com.example.demo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Assignment")
public class assignmentModel {
	@Id
	private String _id;
	private String assignmentName;
	private String description;
	private int examDuration;
	private Date startTime;
	private String type;
	private float pointInPeriod;
	private List<multiChoiceModel> multiChoiceQuestions;
	private List<essayModel> essayQuestions;
	private String sessionId;
	
	public assignmentModel(String assignmentName, String description, int examDuration, Date startTime, String type,
			float pointInPeriod, List<multiChoiceModel> multiChoiceQuestions, List<essayModel> essayQuestions,
			String sessionId) {
		super();
		this.assignmentName = assignmentName;
		this.description = description;
		this.examDuration = examDuration;
		this.startTime = startTime;
		this.type = type;
		this.pointInPeriod = pointInPeriod;
		this.multiChoiceQuestions = multiChoiceQuestions;
		this.essayQuestions = essayQuestions;
		this.sessionId = sessionId;
	}

	public assignmentModel(String _id, String assignmentName, String description, int examDuration, Date startTime,
			String type, float pointInPeriod, List<multiChoiceModel> multiChoiceQuestions,
			List<essayModel> essayQuestions, String sessionId) {
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
		this.sessionId = sessionId;
	}

	public assignmentModel() {
		super();
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

	public int getExamDuration() {
		return examDuration;
	}

	public void setExamDuration(int examDuration) {
		this.examDuration = examDuration;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public float getPointInPeriod() {
		return pointInPeriod;
	}

	public void setPointInPeriod(float pointInPeriod) {
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

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	
	
}

