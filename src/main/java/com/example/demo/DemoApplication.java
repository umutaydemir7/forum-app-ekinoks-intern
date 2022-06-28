package com.example.demo;


import com.example.demo.model.MainTopic;
import com.example.demo.repository.MainTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	MainTopicRepository mainTopicRepository;


	public static void main(String[] args) {

		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {



		//productRepository.save(new Product("Whole Wheat Biscuit", 5, "snacks"));

		mainTopicRepository.save(new MainTopic("Sports"));


	}
}
