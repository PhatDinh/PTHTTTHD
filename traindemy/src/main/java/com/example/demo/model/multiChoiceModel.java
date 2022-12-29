package com.example.demo.model;

import java.util.List;

public class multiChoiceModel {
	private String question;
	private List<String> answers;
	private String rightAnswer;
	
	public multiChoiceModel(String question, List<String> answers, String rightAnswer) {
		super();
		this.question = question;
		this.answers = answers;
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

	public List<String> getAnswers() {
		return answers;
	}

	public void setAnswers(List<String> answers) {
		this.answers = answers;
	}

	public String getRightAnswer() {
		return rightAnswer;
	}

	public void setRightAnswer(String rightAnswer) {
		this.rightAnswer = rightAnswer;
	}
}
