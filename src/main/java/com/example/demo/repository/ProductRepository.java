package com.example.demo.repository;



import com.example.demo.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

    @Query("{name:'?0'}")
    Product findItemByName(String name);

    public long count();

}