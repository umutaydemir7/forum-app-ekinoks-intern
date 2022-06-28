package com.example.demo.controller;

import com.example.demo.model.MainTopic;
import com.example.demo.repository.MainTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/maintopic")
public class MainTopicController {

    @Autowired
    private MainTopicRepository mainTopicRepository;


    @GetMapping("/allmaintopics")
    public ResponseEntity<List<MainTopic>> getAllMainTopics() {
        return  ResponseEntity.ok(mainTopicRepository.findAll());
    }



}
