package com.example.demo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Class")
public class classModel {
	@Id
	private String _id;
	private String className;
	private String description;
	private String method;
	private Date startDate;
	private Date endDate;
	private Date retestDate;
	private departmentModel department;
	private levelModel level;
	private List<skillModel> skills;
	private List<classCourseModel> courses;
	
	public classModel(String _id, String className, String description, String method, Date startDate, Date endDate,
			Date retestDate, departmentModel department, levelModel level, List<skillModel> skills,
			List<classCourseModel> courses) {
		super();
		this._id = _id;
		this.className = className;
		this.description = description;
		this.method = method;
		this.startDate = startDate;
		this.endDate = endDate;
		this.retestDate = retestDate;
		this.department = department;
		this.level = level;
		this.skills = skills;
		this.courses = courses;
	}
	public classModel(String className, String description, String method, Date startDate, Date endDate,
			Date retestDate, departmentModel department, levelModel level, List<skillModel> skills,
			List<classCourseModel> courses) {
		super();
		this.className = className;
		this.description = description;
		this.method = method;
		this.startDate = startDate;
		this.endDate = endDate;
		this.retestDate = retestDate;
		this.department = department;
		this.level = level;
		this.skills = skills;
		this.courses = courses;
	}
	public classModel() {
		super();
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public departmentModel getDepartment() {
		return department;
	}
	public void setDepartment(departmentModel department) {
		this.department = department;
	}
	public levelModel getLevel() {
		return level;
	}
	public void setLevel(levelModel level) {
		this.level = level;
	}
	public List<skillModel> getSkills() {
		return skills;
	}
	public void setSkills(List<skillModel> skills) {
		this.skills = skills;
	}
	public List<classCourseModel> getCourses() {
		return courses;
	}
	public void setCourses(List<classCourseModel> courses) {
		this.courses = courses;
	}
	public Date getRetestDate() {
		return retestDate;
	}
	public void setRetestDate(Date retestDate) {
		this.retestDate = retestDate;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
}
