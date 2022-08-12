package com.example.demo.controller;

import com.example.demo.model.Discussion;
import com.example.demo.model.MainTopic;
import com.example.demo.model.SideTopic;
import com.example.demo.model.User;
import com.example.demo.repository.SideTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import payload.request.DeletionRequest;
import payload.request.DiscussionRequest;
import payload.request.SideTopicRequest;
import payload.request.TopicApproveRequest;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/sidetopic")
public class SideTopicController {

    @Autowired
    private SideTopicRepository sideTopicRepository;


    @GetMapping("/allsidetopics")
    @CrossOrigin
    public ResponseEntity<List<SideTopic>> getAllSideTopics() {
        return  ResponseEntity.ok(sideTopicRepository.findAll());
    }

    @GetMapping("/{mainTopicName}")
    @CrossOrigin
    public ResponseEntity<List<SideTopic>> getSideTopicsByMainTopic(@PathVariable String mainTopicName) {
        return  ResponseEntity.ok(sideTopicRepository.findApprovedSideTopicsByName(mainTopicName));
    }

    @PostMapping("/request")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void submitSideTopicRequest(@RequestBody SideTopicRequest sideTopicRequest){

        SideTopic sideTopic= new SideTopic(SideTopicRequest.getSideTopicName(), SideTopicRequest.getMainTopicName(), SideTopicRequest.getUserSent() );
        sideTopic.setStatus("pending");
        sideTopicRepository.save(sideTopic);
    }


    @GetMapping("/pending")
    @PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public ResponseEntity<List<SideTopic>> getSideTopicsByMainTopic() {
        return  ResponseEntity.ok(sideTopicRepository.findPendingMainTopicsByName());
    }


    @PostMapping("/approve")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void sideTopicApproveRequest(@RequestBody TopicApproveRequest sideTopicApproveRequest){
        SideTopic sideTopic = sideTopicRepository.findItemByName(TopicApproveRequest.getName());
        sideTopic.setStatus(TopicApproveRequest.getStatus());

        sideTopicRepository.save(sideTopic);
    }
    @PostMapping("/delete")
    @PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void deleteSideTopic(@RequestBody DeletionRequest deletionRequest) {
        SideTopic sideTopic= sideTopicRepository.findItemByName(DeletionRequest.getName());
        sideTopicRepository.delete(sideTopic);

    }




}
