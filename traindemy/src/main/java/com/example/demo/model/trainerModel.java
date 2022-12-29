package com.example.demo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class trainerModel {
	@Id
	private String _id;
	private String name;
	private String email;
	private Date DOB;
	
}
