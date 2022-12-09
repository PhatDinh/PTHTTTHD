package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class traindemyApplication {

	static final Logger log = LoggerFactory.getLogger(traindemyApplication.class);
	
	public static void main(String[] args) {
		log.info("starting the Traindemy project...");
		SpringApplication.run(traindemyApplication.class, args);
	}

}
