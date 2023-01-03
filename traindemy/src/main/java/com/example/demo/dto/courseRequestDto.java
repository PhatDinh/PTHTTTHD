package com.example.demo.dto;

import java.util.List;

public class courseRequestDto {
	private String trainerId;
	private List<String> skillIds;
	public courseRequestDto(String trainerId, List<String> skillIds) {
		super();
		this.trainerId = trainerId;
		this.skillIds = skillIds;
	}
	public String getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(String trainerId) {
		this.trainerId = trainerId;
	}
	public List<String> getSkillIds() {
		return skillIds;
	}
	public void setSkillIds(List<String> skillIds) {
		this.skillIds = skillIds;
	}
	
}
