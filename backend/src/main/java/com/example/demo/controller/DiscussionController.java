package com.example.demo.controller;

import com.example.demo.model.Discussion;
import com.example.demo.model.SideTopic;
import com.example.demo.model.User;
import com.example.demo.repository.DiscussionRepository;
import com.example.demo.repository.SideTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/discussion")
public class DiscussionController {

    @Autowired
    private DiscussionRepository discussionRepository;


    @GetMapping("/alldiscussions")
    @CrossOrigin
    public ResponseEntity<List<Discussion>> getAllDiscussions() {
        return  ResponseEntity.ok(discussionRepository.findAll());
    }

    @GetMapping("/{sideTopicName}")
    @CrossOrigin
    public ResponseEntity<List<Discussion>> getSideTopicsByMainTopic(@PathVariable String sideTopicName) {
        return  ResponseEntity.ok(discussionRepository.findDiscussionsByName(sideTopicName));
    }





}