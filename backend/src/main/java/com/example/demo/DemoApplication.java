package com.example.demo;


import com.example.demo.model.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	UserRepository userRepository;


	public static void main(String[] args) {

		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {



		//userRepository.save(new User("mod", "mod@mod.com","mod123"));

		/*mainTopicRepository.save(new MainTopic("Coding"));
		mainTopicRepository.save(new MainTopic("Education"));
		mainTopicRepository.save(new MainTopic("Entertainment"));
		mainTopicRepository.save(new MainTopic("Shopping"));*/

		/*sideTopicRepository.save(new SideTopic("Football","Sports"));
		sideTopicRepository.save(new SideTopic("Basketball","Sports"));
		sideTopicRepository.save(new SideTopic("Volleyball","Sports"));*/


	}
}
