package com.example.demo.controller;

import com.example.demo.model.SideTopic;
import com.example.demo.repository.SideTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/SideTopic")
public class SideTopicController {

    @Autowired
    private SideTopicRepository sideTopicRepository;


    @GetMapping("/allsidetopics")
    public ResponseEntity<List<SideTopic>> getAllSideTopics() {
        return  ResponseEntity.ok(sideTopicRepository.findAll());
    }



}
