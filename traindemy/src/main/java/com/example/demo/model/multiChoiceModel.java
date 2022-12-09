package com.example.demo.model;

import java.util.List;

public class multiChoiceModel {
	private String question;
	private List<String> answer;
	private String rightAnswer;
	
	public multiChoiceModel(String question, List<String> answer, String rightAnswer) {
		super();
		this.question = question;
		this.answer = answer;
		this.rightAnswer = rightAnswer;
	}

	public multiChoiceModel() {
		super();
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public List<String> getAnswer() {
		return answer;
	}

	public void setAnswer(List<String> answer) {
		this.answer = answer;
	}

	public String getRightAnswer() {
		return rightAnswer;
	}

	public void setRightAnswer(String rightAnswer) {
		this.rightAnswer = rightAnswer;
	}
}
