package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;


    @GetMapping("/listall")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(Product product) {
        return ResponseEntity.ok(productRepository.save(product));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable String id) {
        return  ResponseEntity.ok(productRepository.findById(id));
    }

}
