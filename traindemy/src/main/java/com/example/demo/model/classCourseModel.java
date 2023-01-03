package com.example.demo.model;

public class classCourseModel {
		private String _id;
		private String courseName;
		public classCourseModel(String _id, String courseName) {
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
}
