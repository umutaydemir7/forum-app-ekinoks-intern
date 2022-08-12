package com.example.demo.controller;


import com.example.demo.model.Comment;
import com.example.demo.model.Discussion;
import com.example.demo.model.MainTopic;
import com.example.demo.model.User;
import com.example.demo.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import payload.request.CommentRequest;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;


    @PostMapping("/add")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void addComment( @RequestBody CommentRequest commentRequest) {
        Comment comment = new Comment(CommentRequest.getComment(),
                CommentRequest.getDiscussionName(), CommentRequest.getUser()
               );
        LocalDate localDate = LocalDate.now();
        comment.setDate(localDate);
        commentRepository.save(comment);

    }



    @GetMapping("/{discussionName}")
    @CrossOrigin
    public ResponseEntity<List<Comment>> getCommentsByDiscussion(@PathVariable String discussionName) {
        return  ResponseEntity.ok(commentRepository.findCommentsByName(discussionName));
    }





}