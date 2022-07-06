package com.example.demo.repository;

import com.example.demo.model.Comment;
import com.example.demo.model.Discussion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {

    @Query("{name:'?0'}")
    Comment findItemByName(String name);

    @Query("{ 'discussionName' : ?0 }")
    List<Comment> findCommentsByName(String discussionName);

    public long count();

}