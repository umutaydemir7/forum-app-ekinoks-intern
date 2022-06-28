package com.example.demo.repository;

import com.example.demo.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {

    @Query("{name:'?0'}")
    Comment findItemByName(String name);

    public long count();

}