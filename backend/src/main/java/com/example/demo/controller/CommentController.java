package com.example.demo.controller;


import com.example.demo.model.Comment;
import com.example.demo.model.Discussion;
import com.example.demo.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/{discussionName}")
    @CrossOrigin
    public ResponseEntity<List<Comment>> getCommentsByDiscussion(@PathVariable String discussionName) {
        return  ResponseEntity.ok(commentRepository.findCommentsByName(discussionName));
    }





}