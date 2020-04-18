package com.web.abbachurch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.web.abbachurch.*")
public class AbbachurchApplication {

	public static void main(String[] args) {
		SpringApplication.run(AbbachurchApplication.class, args);
	}

}
