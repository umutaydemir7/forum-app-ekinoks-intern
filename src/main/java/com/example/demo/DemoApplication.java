package com.example.demo;


import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	ProductRepository productRepository;


	public static void main(String[] args) {

		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		//productRepository.save(new Product("Whole Wheat Biscuit", 5, "snacks"));


	}
}
