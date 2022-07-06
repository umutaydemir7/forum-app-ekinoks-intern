package com.example.demo;


import com.example.demo.model.Comment;
import com.example.demo.model.Discussion;
import com.example.demo.model.MainTopic;
import com.example.demo.model.SideTopic;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.DiscussionRepository;
import com.example.demo.repository.MainTopicRepository;
import com.example.demo.repository.SideTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	CommentRepository commentRepository;


	public static void main(String[] args) {

		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {



		commentRepository.save(new Comment("You should do a lot of practice", "How to dribble the ball","basketball_lover"));

		/*mainTopicRepository.save(new MainTopic("Coding"));
		mainTopicRepository.save(new MainTopic("Education"));
		mainTopicRepository.save(new MainTopic("Entertainment"));
		mainTopicRepository.save(new MainTopic("Shopping"));*/

		/*sideTopicRepository.save(new SideTopic("Football","Sports"));
		sideTopicRepository.save(new SideTopic("Basketball","Sports"));
		sideTopicRepository.save(new SideTopic("Volleyball","Sports"));*/


	}
}
